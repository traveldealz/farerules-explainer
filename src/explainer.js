export default class {

  text = '';

  constructor( text ) {
    this.text = text;
  }

  get issued_until() {
    let found = this.text.match(/TICKETS MUST BE ISSUED (?:ON\/AFTER \d{2}\w{3} \d{2} AND |)ON\/BEFORE[ \n]+(\d{2})(\w{3}) (\d{2})/);

    if(null === found || 4 !== found.length) {
      return null;
    }

    let date = new Date(found[1] + ' ' + found[2] + ' ' + found[3] + ' UTC');
    let date_string = date.toISOString().substring(0, 10);
    return date_string;
  }

  get advanced_reservation_days() {
    let found = this.text.match(/RESERVATIONS FOR ALL SECTORS ARE REQUIRED AT LEAST (\d{1,3}) DAYS/);

    if(null === found || 2 !== found.length) {
      return null;
    }

    return parseInt(found[1]);

  }

  get travel_period() {
    let found = this.text.match(/VALID FOR TRAVEL COMMENCING (?:ON\/AFTER (\d{2}\w{3} \d{2}) AND |)ON\/[ \n]+BEFORE (\d{2}\w{3} \d{2})/);
    console.log(found);
    if(null === found || 3 !== found.length) {
      return null;
    }

    return [
      {
        from: this.#parse_date(found[1]),
        to: this.#parse_date(found[2]),
      }
    ];
    // ToDo
    //return this.#parse_travel_period(/FROM [A-Z ]+ -\n*[ ]*PERMITTED ([A-Z0-9 \n]+) FOR EACH/);
  }

  get travel_period_blackout() {
    return this.#parse_travel_period(/TRAVEL IS NOT PERMITTED ([A-Z0-9 \n]+)./);
  }

  get travel_period_from() {
    return this.#parse_travel_period(/FROM [A-Z ]+ -\n*[ ]*PERMITTED ([A-Z0-9 \n]+) FOR EACH/);
  }

  get travel_period_to() {
    return this.#parse_travel_period(/TO [A-Z ]+ -\n*[ ]*PERMITTED ([A-Z0-9 \n]+) FOR EACH/);
  }

  #parse_travel_period(regex) {
    let found = this.text.match(regex);

    if(null === found || 2 !== found.length) {
      return null;
    }

    let periods = found[1].split('OR').map(period => {
      let [from, to] = period.split('THROUGH').map(date => this.#parse_date(date) );
      return {from, to}
    });

    return periods;
  }

  #parse_date(date) {
    let [,day,month_name,year=null] = date.trim().match(/(\d{2})(\w{3})(?: (\d{2})|)/);

    return (year ? '20' + year + '-' : '') + months[month_name] + '-' + day;
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
}