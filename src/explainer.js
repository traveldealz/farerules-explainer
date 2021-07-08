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

}