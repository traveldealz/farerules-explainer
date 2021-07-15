export default class {
  text = '';

  constructor(text) {
    this.text = text.replaceAll(/\n+/g, ' ').replaceAll(/[ ]+/g, ' ');
  }

  get booking_class() {
    let found = this.text.match(/General notes.*?\s([A-Z])\s/);

    if (null === found || 2 !== found.length) {
      return null;
    }
    return found[1];
  }

  get weekday_to() {
    let found = this.text.match(/TO [A-Z ]+ - PERMITTED ((\w\w\w\/)+\w\w\w)/);
    if (null === found || 3 !== found.length) {
      return null;
    }

    return found[1].split('/');
  }

  get weekday_from() {
    let found = this.text.match(/FROM [A-Z ]+ - PERMITTED ((\w\w\w\/)+\w\w\w)/);
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

  get travel_period() {
    let found = this.#parse_travel_period(
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
      from: found[1] ? this.#parse_date(found[1]) : null,
      to: found[2] ? this.#parse_date(found[2]) : null,
    };
  }

  get travel_period_blackout() {
    return this.#parse_travel_period(/TRAVEL IS NOT PERMITTED ([A-Z0-9 ]+)./);
  }

  get travel_period_from() {
    return this.#parse_travel_period(
      /FROM [A-Z ]+ - PERMITTED ([A-Z0-9 ]+) FOR EACH/
    );
  }

  get travel_period_to() {
    return this.#parse_travel_period(
      /TO [A-Z ]+ - PERMITTED ([A-Z0-9 ]+) FOR EACH/
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
    let findand = this.text.match(/AND - TRAVEL FROM/);
    let findor = this.text.match(/OR - TRAVEL FROM/);
    return findand != null ? 'and' : findor != null ? 'or' : true;
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
          ? `bis zum ${this.#date_to_text(this.issued_until, lang)} `
          : ''
      }für `;

      if (this.travel_period) {
        result += `Reisen zwischen dem ${this.travel_period
          .map(
            (period) =>
              `${this.#date_to_text(period.from, lang)} ${
                period.from == null ? '' : ' - '
              } ${this.#date_to_text(period.to, lang)}`
          )
          .join(', ')} `;
      } else if (this.travel_period_from) {
        result += `Abflüge zwischen dem ${this.travel_period_from
          .map(
            (period) =>
              `${this.#date_to_text(period.from, lang)} - ${this.#date_to_text(
                period.to,
                lang
              )}`
          )
          .join(', ')} `;
      } else if (this.travel_period_to) {
        result += `und Rückflüge zwischen dem ${this.travel_period_to
          .map(
            (period) =>
              `${this.#date_to_text(period.from, lang)} - ${this.#date_to_text(
                period.to,
                lang
              )}`
          )
          .join(', ')} `;
      } else if (this.travel_commenced) {
        if (this.travel_commenced.from && this.travel_commenced.to) {
          result += `Abflüge zwischen dem ${this.#date_to_text(
            this.travel_commenced.from,
            lang
          )} und ${this.#date_to_text(this.travel_commenced.to, lang)}`;
        } else if (this.travel_commenced.from) {
          result += `Abflüge nach dem ${this.#date_to_text(
            this.travel_commenced.from,
            lang
          )}`;
        } else if (this.travel_commenced.to) {
          result += `Abflüge bis spätestens ${this.#date_to_text(
            this.travel_commenced.to,
            lang
          )}`;
        }
      } else {
        result += `Flüge ohne einen bestimmten Reisezeitraum.`;
      }

      result += `. `;

      if (null === this.issued_until) {
        result += `Der Tarif hat kein Ablaufdatum, kann aber trotzdem jederzeit zurückgezogen werden. `;
      }

      if (this.min_stay) {
        result += `Der Mindestaufenthalt beträgt ${this.min_stay} Tage${
          'or' === this.sunday_rule
            ? ` oder eine Nacht von Samstag auf Sonntag`
            : 'and' === this.sunday_rule
            ? ` und eine Nacht von Samstag auf Sonntag`
            : ''
        }`;

        if (this.max_stay) {
          result += ` und maximal ${
            1 === this.max_stay ? `einen Monat` : `${this.max_stay} Monate`
          }. `;
        } else {
          result += `. `;
        }
      } else if (this.max_stay) {
        result += `Der maximale Aufenthalt beträgt ${
          1 === this.max_stay ? `einen Monat` : `${this.max_stay} Monate`
        } . `;
      }

      result += `Die Tickets werden in Buchungsklasse ${this.booking_class} ausgestellt`;
      if (this.advanced_reservation_days) {
        result += ` und müssen mindestens ${this.advanced_reservation_days} Tage vor Abflug gebucht werden. `;
      } else {
        result += `.`;
      }

      if ('free' === this.stopover) {
        result += `Mindestens ein kostenloser Stopover ist erlaubt.`;
      } else if ('not permitted' === this.stopover) {
        result += `Stopover sind nicht erlaubt.`;
      }
    } else {
      // Fallback to en
    }

    return result;
  }

  #parse_travel_period(regex) {
    let found = this.text.match(regex);

    if (null === found || 2 !== found.length) {
      return null;
    }

    let periods = found[1].split('OR').map((period) => {
      let [from, to] = period
        .split('THROUGH')
        .map((date) => this.#parse_date(date));
      return { from, to };
    });
    return periods;
  }

  #parse_date(date) {
    let [, day, month_name, year = null] = date
      .trim()
      .match(/(\d{2})(\w{3})(?: (\d{2})|)/);

    return (year ? '20' + year + '-' : '') + months[month_name] + '-' + day;
  }

  #date_to_text(date, lang = 'en') {
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
