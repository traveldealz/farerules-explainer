export default class {

  text = '';

  constructor( text ) {
    this.text = text;
  }

  get issued_until() {
    let found = this.text.match(/TICKETS MUST BE ISSUED ON\/BEFORE (\d{2})(\w{3}) (\d{2})/);

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

  get travel_period_from() {
    return this.#travel_period(/FROM [A-Z ]+ -\n*[ ]*PERMITTED ([A-Z0-9 \n]+) FOR EACH/);
  }

  get travel_period_to() {
    console.log(this.#travel_period(/TO [A-Z ]+ -\n*[ ]*PERMITTED ([A-Z0-9 \n]+) FOR EACH/))
    return this.#travel_period(/TO [A-Z ]+ -\n*[ ]*PERMITTED ([A-Z0-9 \n]+) FOR EACH/);
  }

  #travel_period(regex) {
    let found = this.text.match(regex);

    if(null === found || 2 !== found.length) {
      return null;
    }

    //console.log(found);

    let periods = found[1].split('OR').map(period => {
      let [from, to] = period.split('THROUGH').map(date => {
        let [,day,month_name] = date.trim().match(/(\d{2})(\w{3})/);
        return months[month_name] + '-' + day;
      } );
      return {from, to}
    });

    return periods;
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