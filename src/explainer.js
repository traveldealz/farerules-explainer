class Explainer {
  text = '';
  now = new Date();

  constructor(text) {
    this.text = text.replaceAll(/\n+/g, ' ').replaceAll(/[ ]+/g, ' ');
  }

  listForm() {
    let list = '<ul>';
    this.issued_until != null
      ? (list +=
          '<li>Issued Until: ' +
          this.date_to_text(this.issued_until, 'de') +
          '</li>')
      : {};
    this.min_stay != null
      ? (list += '<li>Min. Stay: ' + this.min_stay + ' days')
      : {};
    if (this.sunday_rule != null) {
      if (this.min_stay != null) {
        list += ' or a Sunday </li>';
      } else {
        list += '<li>Min. Stay: A Sunday</li>';
      }
    } else {
      if (this.min_stay != null) {
        list += '</li>';
      }
    }
    this.max_stay != null
      ? (list += '<li>Max. Stay: ' + this.max_stay + ' months</li>')
      : {};
    this.booking_class != null
      ? (list += '<li>Booking Class: ' + this.booking_class + '</li>')
      : {};
    this.cancelable === 'yes' || this.cancelable === 'no'
      ? (list += '<li>Cancelable: ' + this.cancelable + '</li>')
      : (list +=
          '<li>Cancelable: ' +
          this.cancelable.currency +
          this.cancelable.price +
          '</li>');
    this.change === 'yes' || this.change === 'no'
      ? (list += '<li>Change: ' + this.change + '</li>')
      : (list +=
          '<li>Rebooking: ' +
          this.change.currency +
          this.change.price +
          '</li>');
    this.cabinclass != null
      ? (list += '<li>Cabin Class: ' + this.cabinclass + '</li>')
      : {};
    this.weekday_to != null
      ? (list += '<li>Weekday To: ' + this.weekday_to + '</li>')
      : {};
    this.weekday_from != null
      ? (list += '<li>Weekday From: ' + this.weekday_from + '</li>')
      : {};
    this.weekday != null
      ? (list +=
          '<li>Weekday: ' +
          this.weekday.from +
          ' - ' +
          this.weekday.until +
          '</li>')
      : {};
    this.advanced_reservation_days != null
      ? (list +=
          '<li>Advanced Reservation : ' +
          this.advanced_reservation_days +
          ' days</li>')
      : {};
    list += '<li>Stopover: ' + this.stopover + '</li>';

    if (this.travel_period != null) {
      list += '<li>Travel Period: <ul>';
      for (var i = 0; i < this.travel_period.length; i++) {
        list +=
          '<li>' +
          this.date_to_text(this.travel_period[i].from, 'de') +
          ' - ' +
          this.date_to_text(this.travel_period[i].to, 'de') +
          '</li>';
      }
      list += '</ul></li>';
    }

    if (this.travel_commenced != null) {
      list += '<li>Travel Commenced: <ul>';
      for (var i = 0; i < this.travel_commenced.length; i++) {
        list +=
          '<li>' +
          this.date_to_text(this.travel_commenced[i].from, 'de') +
          ' - ' +
          this.date_to_text(this.travel_commenced[i].to, 'de') +
          '</li>';
      }
      list += '</ul></li>';
    }

    if (this.travel_period_blackout != null) {
      list += '<li>Travel Period Blackout: <ul>';
      for (var i = 0; i < this.travel_period_blackout.length; i++) {
        list +=
          '<li>' +
          this.date_to_text(this.travel_period_blackout[i].from, 'de') +
          ' - ' +
          this.date_to_text(this.travel_period_blackout[i].to, 'de') +
          '</li>';
      }
      list += '</ul></li>';
    }

    if (this.travel_period_from != null) {
      list += '<li>Travel Period From: <ul>';
      for (var i = 0; i < this.travel_period_from.length; i++) {
        list +=
          '<li>' +
          this.date_to_text(this.travel_period_from[i].from, 'de') +
          ' - ' +
          this.date_to_text(this.travel_period_from[i].to, 'de') +
          '</li>';
      }
      list += '</ul></li>';
    }

    if (this.travel_period_to != null) {
      list += '<li>Travel Period To: <ul>';
      for (var i = 0; i < this.travel_period_to.length; i++) {
        list +=
          '<li>' +
          this.date_to_text(this.travel_period_to[i].from, 'de') +
          ' - ' +
          this.date_to_text(this.travel_period_to[i].to, 'de') +
          '</li>';
      }
      list += '</ul></li>';
    }

    this.child_charge != null
      ? (list += '<li>Child Charge: ' + this.child_charge * 100 + '%</li>')
      : {};
    this.infant_charge != null
      ? (list += '<li>Infant Charge: ' + this.infant_charge * 100 + '%</li>')
      : {};
    this.infant_seat_charge != null
      ? (list +=
          '<li>Infant with Seat Charge: ' +
          this.infant_seat_charge * 100 +
          '%</li>')
      : {};
    return list + '</ul>';
  }

  get cancelable() {
    let found = this.text.match(
      /CANCELLATIONS (?:BEFORE DEPARTURE|ANY TIME) CHARGE (\w\w\w) (\d+)/
    );
    if (null !== found && 3 === found.length) {
      return { currency: found[1], price: parseInt(found[2]) };
    }
    found = this.text.match(
      /(?:BEFORE DEPARTURE|ANY TIME) TICKET IS NON-REFUNDABLE/
    );
    if (null != found) {
      return 'no';
    }
    found = this.text.match(
      /CANCELLATIONS (?:BEFORE DEPARTURE|ANY TIME) CANCELLATIONS PERMITTED/
    );
    if (null != found) {
      return 'yes';
    }

    return null;
  }

  get cabinclass() {
    let found = this.text.match(
      /THESE FARES APPLY FOR ((?:\w+ )+)CLASS SERVICE/
    );
    if (null !== found && 2 === found.length) {
      switch (found[1]) {
        case 'ECONOMY ':
          return 'Y';
        case 'BUSINESS ':
          return 'C';
        case 'PREMIUM ECONOMY ':
          return 'W';
        case 'FIRST ':
          return 'F';
      }
    }
    return null;
  }

  get change() {
    let found = this.text.match(
      /CHANGES (?:BEFORE DEPARTURE|ANY TIME) CHARGE (\w\w\w) (\d+)/
    );
    if (null !== found && 3 === found.length) {
      return { currency: found[1], price: parseInt(found[2]) };
    }
    found = this.text.match(
      /(?:BEFORE DEPARTURE|ANY TIME) CHANGES NOT PERMITTED/
    );
    if (null != found) {
      return 'no';
    }
    found = this.text.match(
      /CHANGES (?:BEFORE DEPARTURE|ANY TIME) CHANGES PERMITTED/
    );
    if (null != found) {
      return 'yes';
    }

    return null;
  }

  get booking_class() {
    let found = this.text.match(/General notes.*?\s([A-Z])\s/);

    if (null === found || 2 !== found.length) {
      return null;
    }
    return found[1];
  }

  get weekday() {
    let found = this.text.match(/PERMITTED (\w\w\w) THROUGH (\w\w\w)/);
    if (null === found || 3 !== found.length) {
      return null;
    }
    return { from: found[1], until: found[2] };
  }

  get weekday_to() {
    let found = this.text.match(
      /(?:TO [A-Z ]+|OUTBOUND) - PERMITTED ((\w\w\w\/)+\w\w\w)/
    );
    if (null === found || 3 !== found.length) {
      return null;
    }

    return found[1].split('/');
  }

  get weekday_from() {
    let found = this.text.match(
      /(?:FROM [A-Z ]+|INBOUND) - PERMITTED ((\w\w\w\/)+\w\w\w)/
    );
    if (null === found || 3 !== found.length) {
      return null;
    }

    return found[1].split('/');
  }

  get issued_until() {
    let found = this.text.match(
      /TICKETS MUST BE ISSUED (?:ON\/AFTER \d{2}\w{3} \d{2} AND |)ON\/BEFORE (\d{2})(\w{3}) (\d{2})/
    );

    if (null === found || 4 !== found.length) {
      return null;
    }

    let date = new Date(found[1] + ' ' + found[2] + ' ' + found[3] + ' UTC');
    let date_string = date.toISOString().substring(0, 10);
    return date_string;
  }

  get advanced_reservation_days() {
    let found = this.text.match(
      /RESERVATIONS FOR ALL SECTORS (?:AND TICKETING )*ARE REQUIRED AT LEAST (\d{1,3}) DAYS/
    );

    if (null === found || 2 !== found.length) {
      return null;
    }

    return parseInt(found[1]);
  }

  get stopover() {
    let found = this.text.match(/FREE STOPOVER PERMITTED/);
    let found2 = this.text.match(
      /(STOPOVERS NOT PERMITTED)|(NO STOPOVERS PERMITTED)/
    );
    return found ? 'free' : found2 ? 'not permitted' : null;
  }

  get no_luggage() {
    let found = this.text.match(/(?:NO|ZERO) BAGGAGE ALLOWANCE MUST BE /);
    return found != null;
  }

  get travel_period() {
    let found = this.parse_travel_period(
      /Seasonal restrictions\s*PERMITTED ([A-Z0-9 ]+) ON/
    );
    if (null === found) {
      return null;
    }

    return found;
  }

  get travel_commenced() {
    let found = this.text.match(
      /VALID FOR TRAVEL COMMENCING (?:ON\/AFTER (\d{2}\w{3} \d{2}) AND |)ON\/\s*BEFORE (\d{2}\w{3} \d{2})/
    );

    if (null === found || 3 !== found.length) {
      return null;
    }

    return {
      from: found[1] ? this.parse_date(found[1]) : null,
      to: found[2] ? this.parse_date(found[2]) : null,
    };
  }

  get travel_period_blackout() {
    return this.parse_travel_period(/TRAVEL IS NOT PERMITTED ([A-Z0-9 ]+)./);
  }

  get travel_period_from() {
    return this.parse_travel_period(
      /(?:FROM [A-Z ]+|OUTBOUND) - PERMITTED ([A-Z0-9 ]+) FOR EACH/
    );
  }

  get travel_period_to() {
    return this.parse_travel_period(
      /(?:TO [A-Z ]+|INBOUND) - PERMITTED ([A-Z0-9 ]+) FOR EACH/
    );
  }

  get min_stay() {
    let found = this.text.match(/NO EARLIER THAN (\d+) DAYS AFTER/);

    if (null === found || 2 !== found.length) {
      return null;
    }

    return parseInt(found[1]);
  }

  get sunday_rule() {
    let found = this.text.match(/THE FIRST SUN/);
    if (found === null) {
      return null;
    }
    return true;
    //let findand = this.text.match(/AND - TRAVEL FROM/);
    //let findor = this.text.match(/OR - TRAVEL FROM/);
    //return findand != null ? 'and' : findor != null ? 'or' : true;
  }

  get max_stay() {
    let found = this.text.match(/NO LATER THAN (\d+) MONTHS AFTER/);

    if (null === found || 2 !== found.length) {
      return null;
    }

    return parseInt(found[1]);
  }

  get child_charge() {
    let found = this.text.match(
      /ACCOMPANIED CHILD 2-11(?:\. ID REQUIRED|) - (?:CHARGE |)(\d{1,3}|NO DISCOUNT) (?:PERCENT OF THE FARE\.|OR )/
    );

    if (null === found || 2 !== found.length) {
      return null;
    }

    return 'NO DISCOUNT' === found[1] ? 1 : parseInt(found[1]) / 100;
  }

  get infant_charge() {
    let found = this.text.match(
      /INFANT UNDER 2 WITHOUT A SEAT - CHARGE (\d{1,3}|NO DISCOUNT) PERCENT OF THE FARE\./
    );

    if (null === found || 2 !== found.length) {
      return null;
    }

    return 'NO DISCOUNT' === found[1] ? 1 : parseInt(found[1]) / 100;
  }

  get infant_seat_charge() {
    let found = this.text.match(
      /INFANT UNDER 2 WITH A SEAT(?:\. ID REQUIRED|) - (?:CHARGE |)(\d{1,3}|NO DISCOUNT) (?:PERCENT OF THE FARE\.|OR )/
    );

    if (null === found || 2 !== found.length) {
      return null;
    }

    return 'NO DISCOUNT' === found[1] ? 1 : parseInt(found[1]) / 100;
  }

  explain(lang = 'en') {
    let result = '';

    if ('de' === lang) {
      result += `Buchbar ist der Tarif ${
        this.issued_until
          ? `bis zum ${this.date_to_text(this.issued_until, lang)} `
          : ''
      }f??r `;

      if (this.travel_period) {
        result += `Reisen zwischen dem ${this.travel_period
          .map(({ from, to }) =>
            this.constructor.month_day_period_to_yearly_periods(
              from,
              to,
              this.now
            )
          )
          .flat()
          .sort((a, b) => a.from > b.from)
          .map(
            (period) =>
              `${this.date_to_text(period.from, lang)} ${
                period.from == null ? '' : ' - '
              } ${this.date_to_text(period.to, lang)}`
          )
          .join(', ')}`;
      } else if (this.travel_period_from) {
        result += `Abfl??ge zwischen dem ${this.travel_period_from
          .map(({ from, to }) =>
            this.constructor.month_day_period_to_yearly_periods(
              from,
              to,
              this.now
            )
          )
          .flat()
          .sort((a, b) => a.from > b.from)
          .map(
            (period) =>
              `${this.date_to_text(period.from, lang)} - ${this.date_to_text(
                period.to,
                lang
              )}`
          )
          .join(', ')} `;
        if (this.travel_period_to) {
          result += `und R??ckfl??ge zwischen dem ${this.travel_period_to
            .map(({ from, to }) =>
              this.constructor.month_day_period_to_yearly_periods(
                from,
                to,
                this.now
              )
            )
            .flat()
            .sort((a, b) => a.from > b.from)
            .map(
              (period) =>
                `${this.date_to_text(period.from, lang)} - ${this.date_to_text(
                  period.to,
                  lang
                )}`
            )
            .join(', ')} `;
        }
      } else if (this.travel_period_to) {
        result += `R??ckfl??ge zwischen dem ${this.travel_period_to
          .map(({ from, to }) =>
            this.constructor.month_day_period_to_yearly_periods(
              from,
              to,
              this.now
            )
          )
          .flat()
          .sort((a, b) => a.from > b.from)
          .map(
            (period) =>
              `${this.date_to_text(period.from, lang)} - ${this.date_to_text(
                period.to,
                lang
              )}`
          )
          .join(', ')} `;
      } else if (this.travel_commenced) {
        if (this.travel_commenced.from && this.travel_commenced.to) {
          result += `Abfl??ge zwischen dem ${this.date_to_text(
            this.travel_commenced.from,
            lang
          )} und ${this.date_to_text(this.travel_commenced.to, lang)}`;
        } else if (this.travel_commenced.from) {
          result += `Abfl??ge nach dem ${this.date_to_text(
            this.travel_commenced.from,
            lang
          )}`;
        } else if (this.travel_commenced.to) {
          result += `Abfl??ge bis sp??testens ${this.date_to_text(
            this.travel_commenced.to,
            lang
          )}`;
        }
      } else {
        result += `Fl??ge ohne einen bestimmten Reisezeitraum`;
      }

      result += '.';

      if (this.weekday_from) {
        result += ' Allerdings darf der Abflug nur an einem ';
        for (var i = 0; i < this.weekday_from.length - 1; i++) {
          result += tage[this.weekday_from[i]] + ', ';
        }
        result +=
          'oder ' +
          tage[this.weekday_from[this.weekday_from.length - 1]] +
          ' stattfinden.';
      }

      if (this.weekday_to) {
        result += ' Der R??ckflug darf nur an einem ';
        for (var i = 0; i < this.weekday_to.length - 1; i++) {
          result += tage[this.weekday_to[i]] + ', ';
        }
        result +=
          'oder ' +
          tage[this.weekday_to[this.weekday_to.length - 1]] +
          ' stattfinden.';
      }

      if (this.weekday) {
        result +=
          ' Dieses Angebot gilt nur f??r Fl??ge zwischen ' +
          tage[this.weekday.from] +
          ' und ' +
          tage[this.weekday.until] +
          '.';
      }

      if (null === this.issued_until) {
        result += ` Der Tarif hat kein Ablaufdatum, kann aber trotzdem jederzeit zur??ckgezogen werden. `;
      }

      if (this.min_stay || this.sunday_rule) {
        result += ' Der Mindestaufenthalt betr??gt ';
        this.min_stay ? (result += this.min_stay + ' Tage') : {};
        if (this.min_stay && this.sunday_rule) {
          result += ' oder ';
        }
        this.sunday_rule
          ? (result += `eine Nacht von Samstag auf Sonntag. `)
          : {};
      }

      if (this.max_stay) {
        result += `Der maximale Aufenthalt betr??gt ${
          1 === this.max_stay ? `einen Monat` : `${this.max_stay} Monate`
        }. `;
      }

      result += '\nDie ';
      switch (this.cabinclass) {
        case 'Y':
          result += 'Economy-Class-';
          break;
        case 'C':
          result += 'Business-Class-';
          break;
        case 'W':
          result += 'Premium-Economy-Class-';
          break;
        case 'F':
          result += 'First-Class-';
          break;
      }
      result += `Tickets werden in Buchungsklasse ${this.booking_class} ausgestellt`;
      if (this.advanced_reservation_days) {
        result += ` und m??ssen mindestens ${this.advanced_reservation_days} Tage vor Abflug gebucht werden. `;
      } else {
        result += `.`;
      }

      this.no_luggage
        ? (result += 'Bei diesem Tarif ist kein Aufgabegep??ck inklusive.')
        : {};

      if ('free' === this.stopover) {
        result += ` Mindestens ein kostenloser Stopover ist erlaubt.`;
      } else if ('not permitted' === this.stopover) {
        result += ` Stopover sind nicht erlaubt.`;
      }

      if (this.cancelable != null) {
        result += ' Diese Fl??ge lassen sich ';
        this.cancelable === 'no'
          ? (result += 'nicht')
          : this.cancelable === 'yes'
          ? (result += 'kostenlos')
          : (result +=
              'f??r ' + this.cancelable.price + ' ' + this.cancelable.currency);
        result += ' stornieren';
      }
      if (this.change != null) {
        (this.change === 'no' && this.cancelable === 'no') ||
        (this.change === 'yes' && this.cancelable === 'yes')
          ? (result += ' und auch')
          : (result += ' aber');
        result += ' umbuchen lassen sich die Fl??ge ';
        this.change === 'no'
          ? (result += 'nicht.')
          : this.change === 'yes'
          ? (result += 'ohne Umbuchungsgeb??hr.')
          : (result +=
              'f??r ' +
              this.cancelable.price +
              ' ' +
              this.cancelable.currency +
              '.');
      }
    } else {
      // Fallback to en
      result += `This fare can be booked ${
        this.issued_until
          ? `until ${this.date_to_text(this.issued_until, lang)} `
          : ''
      }for `;

      if (this.travel_period) {
        result += `trips between ${this.travel_period
          .map(({ from, to }) =>
            this.constructor.month_day_period_to_yearly_periods(
              from,
              to,
              this.now
            )
          )
          .flat()
          .sort((a, b) => a.from > b.from)
          .map(
            (period) =>
              `${this.date_to_text(period.from, lang)} ${
                period.from == null ? '' : ' - '
              } ${this.date_to_text(period.to, lang)}`
          )
          .join(', ')}`;
      } else if (this.travel_period_from) {
        result += `departures between ${this.travel_period_from
          .map(({ from, to }) =>
            this.constructor.month_day_period_to_yearly_periods(
              from,
              to,
              this.now
            )
          )
          .flat()
          .sort((a, b) => a.from > b.from)
          .map(
            (period) =>
              `${this.date_to_text(period.from, lang)} - ${this.date_to_text(
                period.to,
                lang
              )}`
          )
          .join(', ')} `;
        if (this.travel_period_to) {
          result += `and inbound flights between ${this.travel_period_to
            .map(({ from, to }) =>
              this.constructor.month_day_period_to_yearly_periods(
                from,
                to,
                this.now
              )
            )
            .flat()
            .sort((a, b) => a.from > b.from)
            .map(
              (period) =>
                `${this.date_to_text(period.from, lang)} - ${this.date_to_text(
                  period.to,
                  lang
                )}`
            )
            .join(', ')} `;
        }
      } else if (this.travel_period_to) {
        result += `inbound flights between ${this.travel_period_to
          .map(({ from, to }) =>
            this.constructor.month_day_period_to_yearly_periods(
              from,
              to,
              this.now
            )
          )
          .flat()
          .sort((a, b) => a.from > b.from)
          .map(
            (period) =>
              `${this.date_to_text(period.from, lang)} - ${this.date_to_text(
                period.to,
                lang
              )}`
          )
          .join(', ')} `;
      } else if (this.travel_commenced) {
        if (this.travel_commenced.from && this.travel_commenced.to) {
          result += `Departures between ${this.date_to_text(
            this.travel_commenced.from,
            lang
          )} und ${this.date_to_text(this.travel_commenced.to, lang)}`;
        } else if (this.travel_commenced.from) {
          result += `Departures after ${this.date_to_text(
            this.travel_commenced.from,
            lang
          )}`;
        } else if (this.travel_commenced.to) {
          result += `Departures before ${this.date_to_text(
            this.travel_commenced.to,
            lang
          )}`;
        }
      } else {
        result += `flights without a specific travel period`;
      }

      result += '.';

      if (this.weekday_to) {
        result += ' However, the outbound flight may only take place on a ';
        for (var i = 0; i < this.weekday_from.length - 1; i++) {
          result += days[this.weekday_from[i]] + ', ';
        }
        result +=
          'or ' + days[this.weekday_from[this.weekday_from.length - 1]] + '.';
      }

      if (this.weekday_to) {
        result += ' The inbound flight can take place on a ';
        for (var i = 0; i < this.weekday_to.length - 1; i++) {
          result += days[this.weekday_to[i]] + ', ';
        }
        result +=
          'or ' + days[this.weekday_to[this.weekday_to.length - 1]] + '.';
      }

      if (this.weekday) {
        result +=
          ' This deal is only available for flights departing from ' +
          days[this.weekday.from] +
          ' to ' +
          days[this.weekday.until] +
          '.';
      }

      if (null === this.issued_until) {
        result += ` The fare has no expiration date and can thus be withdrawn anytime. `;
      }

      if (this.min_stay || this.sunday_rule) {
        result += ' The minimum stay requirement is of ';
        this.min_stay ? (result += this.min_stay + ' days') : {};
        if (this.min_stay && this.sunday_rule) {
          result += ' or ';
        }
        this.sunday_rule ? (result += `one Sunday. `) : {};
      }

      if (this.max_stay) {
        result += `Furthermore, your stay cannot exceed ${
          1 === this.max_stay ? `one month` : `${this.max_stay} months`
        }. `;
      }

      result += '\nThe ';
      switch (this.cabinclass) {
        case 'Y':
          result += 'economy class';
          break;
        case 'C':
          result += 'business class';
          break;
        case 'W':
          result += 'premium economy';
          break;
        case 'F':
          result += 'first class';
          break;
      }
      result += ` tickets are issued in booking class ${this.booking_class}`;
      if (this.advanced_reservation_days) {
        result += ` and have to be booked at least ${this.advanced_reservation_days} days before departure. `;
      } else {
        result += `.`;
      }

      this.no_luggage
        ? (result += 'This fare does not include any checked luggage.')
        : {};

      if ('free' === this.stopover) {
        result += ` At least one free stopover is permitted.`;
      } else if ('not permitted' === this.stopover) {
        result += ` Stopovers are not permitted.`;
      }

      if (this.cancelable != null) {
        result += ' These flights can';
        this.cancelable === 'no' ? (result += "'t") : {};
        result += ' be canceled';
        this.cancelable === 'yes'
          ? (result += ' for free')
          : this.cancelable !== 'no'
          ? (result +=
              ' for ' + this.cancelable.currency + ' ' + this.cancelable.price)
          : {};
      }

      if (this.change != null) {
        (this.change === 'no' && this.cancelable === 'no') ||
        (this.change === 'yes' && this.cancelable === 'yes')
          ? (result += ' and also')
          : (result += ' but can');
        this.change === 'no' ? (result += "can't") : {};
        result += ' be rebooked ';
        this.change === 'yes'
          ? (result += 'without having to pay a rebooking fee.')
          : this.change !== 'no'
          ? (result +=
              'for ' + this.change.currency + ' ' + this.change.price + '.')
          : {};
      }
    }

    return result;
  }

  parse_travel_period(regex) {
    let found = this.text.match(regex);

    if (null === found || 2 !== found.length) {
      return null;
    }

    let periods = found[1].split('OR').map((period) => {
      let [from, to] = period
        .split('THROUGH')
        .map((date) => this.parse_date(date));
      return { from, to };
    });
    return periods;
  }

  parse_date(date) {
    let [, day, month_name, year = null] = date
      .trim()
      .match(/(\d{2})(\w{3})(?: (\d{2})|)/);

    return (year ? '20' + year + '-' : '') + months[month_name] + '-' + day;
  }

  date_to_text(date, lang = 'en') {
    if (date == null) {
      return 'bis zum ';
    }
    if (5 === date.length) {
      return new Date(new Date().getFullYear() + '-' + date).toLocaleDateString(
        lang,
        { day: 'numeric', month: 'long' }
      );
    }

    return new Date(date).toLocaleDateString(lang, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  static month_day_period_to_yearly_periods(from, to, now = new Date()) {
    if (10 === from.length && 10 === to.length) {
      if (now > new Date(from) && now > new Date(to)) {
        return [];
      }
      return [{ from, to }];
    }

    let this_year_from, this_year_to;
    this_year_from = this_year_to = now.getFullYear();
    let next_year_from, next_year_to;
    next_year_from = next_year_to = this_year_from + 1;
    let last_year = this_year_from - 1;

    if (
      new Date(this_year_from + '-' + from) > new Date(this_year_to + '-' + to)
    ) {
      this_year_to++;
      next_year_to++;
    }

    if (
      now < new Date(this_year_from + '-' + from) &&
      now < new Date(this_year_to + '-' + to)
    ) {
      // Period is in the future
      return [
        {
          from: new Date(this_year_from + '-' + from)
            .toISOString()
            .substring(0, 10),
          to: new Date(this_year_to + '-' + to).toISOString().substring(0, 10),
        },
      ];
    } else if (
      now > new Date(this_year_from + '-' + from) &&
      now > new Date(this_year_to + '-' + to)
    ) {
      // Period is in the past
      return [
        {
          from: new Date(next_year_from + '-' + from)
            .toISOString()
            .substring(0, 10),
          to: new Date(next_year_to + '-' + to).toISOString().substring(0, 10),
        },
      ];
    } else if (
      // Currently in Period
      now > new Date(this_year_from + '-' + from) &&
      now < new Date(this_year_to + '-' + to)
    ) {
      return [
        {
          from: new Date(this_year_from + '-' + from)
            .toISOString()
            .substring(0, 10),
          to: new Date(this_year_to + '-' + to).toISOString().substring(0, 10),
        },
        {
          from: new Date(next_year_from + '-' + from)
            .toISOString()
            .substring(0, 10),
          to: new Date(next_year_to + '-' + to).toISOString().substring(0, 10),
        },
      ];
    }
    console.log('nothing');
    return [];
  }
}

const months = {
  JAN: '01',
  FEB: '02',
  MAR: '03',
  APR: '04',
  MAY: '05',
  JUN: '06',
  JUL: '07',
  AUG: '08',
  SEP: '09',
  OCT: '10',
  NOV: '11',
  DEC: '12',
};

const tage = {
  MON: 'Montag',
  TUE: 'Dienstag',
  WED: 'Mittwoch',
  THU: 'Donnerstag',
  FRI: 'Freitag',
  SAT: 'Samstag',
  SUN: 'Sonntag',
};

const days = {
  MON: 'Monday',
  TUE: 'Tuesday',
  WED: 'Wednesday',
  THU: 'Thursday',
  FRI: 'Friday',
  SAT: 'Saturday',
  SUN: 'Sunday',
};

export default Explainer;
