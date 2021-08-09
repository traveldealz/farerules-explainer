// BDD-Style Testing (powered by https://mochajs.org/)
//
// Use any assert library
import chai from 'chai/chai.js';
const expect = chai.expect;

import Explainer from './../src/explainer.js';

import * as farerules from './data/farerules.js';

describe('Test Explain', () => {
  let explain = new Explainer('');
  Object.defineProperty(explain, 'issued_until', {value: '2021-07-22'});
  Object.defineProperty(explain, 'min_stay', {value: 4});
  Object.defineProperty(explain, 'sunday_rule', {value: 'or'});
  Object.defineProperty(explain, 'booking_class', {value: 'K'});
  console.log(explain.explain('de'));
  it(`issued_until`, () =>
      expect(explain.explain('de')).to.contain(
          'Buchbar ist der Tarif bis zum 22. Juli 2021'
      ));
  it(`minimum stay`, () =>
      expect(explain.explain('de')).to.contain(
          'Der Mindestaufenthalt beträgt 4 Tage'
      ));
  it(`sunday rule or`, () =>
      expect(explain.explain('de')).to.contain(
          'oder eine Nacht von Samstag auf Sonntag'
      ));
  it(`travel_commenced`, () => {
    let ownexplain = new Explainer('');
    Object.defineProperty(ownexplain, 'travel_commenced', {
      value: {
        from: '2021-07-01',
        to: '2022-03-31',
      },
    });
    expect(ownexplain.explain('de')).to.contain(
        'für Abflüge zwischen dem 1. Juli 2021 und 31. März 2022'
    );
  });
  it(`travel_commenced from`, () => {
    let ownexplain = new Explainer('');
    Object.defineProperty(ownexplain, 'travel_commenced', {
      value: {
        from: '2021-07-01',
        to: null,
      },
    });
    expect(ownexplain.explain('de')).to.contain(
        'für Abflüge nach dem 1. Juli 2021'
    );
  });
  it(`travel_commenced to`, () => {
    let ownexplain = new Explainer('');
    Object.defineProperty(ownexplain, 'travel_commenced', {
      value: {
        from: null,
        to: '2022-03-31',
      },
    });
    expect(ownexplain.explain('de')).to.contain(
        'für Abflüge bis spätestens 31. März 2022'
    );
  });
  it(`travel_period_from`, () => {
    let ownexplain = new Explainer('');
    ownexplain.now = new Date('2021-07-28');
    Object.defineProperty(ownexplain, 'travel_period_from', {
      value: [
        {
          from: '2020-10-18',
          to: '2021-12-22',
        },
        {
          from: '2021-12-28',
          to: '2022-04-08',
        },
      ],
    });
    expect(ownexplain.explain('de')).to.contain(
        'für Abflüge zwischen dem 18. Oktober 2020 - 22. Dezember 2021, 28. Dezember 2021 - 8. April 2022'
    );
  });
  it(`travel_period_to`, () => {
    let ownexplain = new Explainer('');
    ownexplain.now = new Date('2021-07-28');
    Object.defineProperty(ownexplain, 'travel_period_to', {
      value: [
        {
          from: '2020-10-18',
          to: '2021-12-25',
        },
        {
          from: '2022-01-10',
          to: '2022-04-15',
        },
      ],
    });
    expect(ownexplain.explain('de')).to.contain(
        'Rückflüge zwischen dem 18. Oktober 2020 - 25. Dezember 2021, 10. Januar 2022 - 15. April 2022'
    );
  });
  it(`travel_period_from & _to`, () => {
    let ownexplain = new Explainer('');
    ownexplain.now = new Date('2021-07-28');
    Object.defineProperty(ownexplain, 'travel_period_from', {
      value: [
        {
          from: '2020-10-18',
          to: '2021-12-22',
        },
        {
          from: '2021-12-28',
          to: '2022-04-08',
        },
      ],
    });
    Object.defineProperty(ownexplain, 'travel_period_to', {
      value: [
        {
          from: '2020-10-18',
          to: '2021-12-25',
        },
        {
          from: '2022-01-10',
          to: '2022-04-15',
        },
      ],
    });
    expect(ownexplain.explain('de')).to.contain(
        'für Abflüge zwischen dem 18. Oktober 2020 - 22. Dezember 2021, 28. Dezember 2021 - 8. April 2022 und Rückflüge zwischen dem 18. Oktober 2020 - 25. Dezember 2021, 10. Januar 2022 - 15. April 2022'
    );
  });
  it(`travel_period_from in the past`, () => {
    let ownexplain = new Explainer('');
    ownexplain.now = new Date('2021-07-28');
    Object.defineProperty(ownexplain, 'travel_period_from', {
      value: [
        {
          from: '2020-10-18',
          to: '2021-07-01',
        },
        {
          from: '2021-12-28',
          to: '2022-04-08',
        },
      ],
    });
    expect(ownexplain.explain('de')).to.contain(
        'für Abflüge zwischen dem 28. Dezember 2021 - 8. April 2022'
    );
  });
  it(`kostenlos stornierbar`, () => {
    Object.defineProperty(explain, 'cancelable', {value: 'yes', configurable: true});
    expect(explain.explain('de')).to.contain(
        'Diese Flüge lassen sich kostenlos stornieren'
    );
  });
  it(`nicht stornierbar`, () => {
    Object.defineProperty(explain, 'cancelable', {value: 'no', configurable: true});
    expect(explain.explain('de')).to.contain(
        'Diese Flüge lassen sich nicht stornieren'
    );
  });
  it(`kostenpflichtig stornierbar`, () => {
    Object.defineProperty(explain, 'cancelable', {value: {currency: 'EUR', price: 200}, configurable: true});
    expect(explain.explain('de')).to.contain(
        'Diese Flüge lassen sich für 200 EUR stornieren'
    );
  });
  it(`kostenlos umbuchbar`, () => {
    Object.defineProperty(explain, 'change', {value: 'yes', configurable: true});
    expect(explain.explain('de')).to.contain(
        'umbuchen lassen sich die Flüge ohne Umbuchungsgebühr'
    );
  });
  it(`nicht umbuchbar`, () => {
    Object.defineProperty(explain, 'change', {value: 'no', configurable: true});
    expect(explain.explain('de')).to.contain(
        'umbuchen lassen sich die Flüge nicht.'
    );
  });
  it(`kostenpflichtig umbuchbar`, () => {
    Object.defineProperty(explain, 'change', {value: {currency: 'EUR', price: 200}, configurable: true});
    expect(explain.explain('de')).to.contain(
        'umbuchen lassen sich die Flüge für 200 EUR.'
    );
  });
  it(`Eco`, () => {
    Object.defineProperty(explain, 'cabinclass', {value: 'Y', configurable: true});
    expect(explain.explain('de')).to.contain(
        'Die Economy-Class-Tickets werden in Buchungsklasse K ausgestellt'
    );
  });
  it(`Premium Eco`, () => {
    Object.defineProperty(explain, 'cabinclass', {value: 'W', configurable: true});
    expect(explain.explain('de')).to.contain(
        'Die Premium-Economy-Class-Tickets werden in Buchungsklasse K ausgestellt'
    );
  });
  it(`Business`, () => {
    Object.defineProperty(explain, 'cabinclass', {value: 'C', configurable: true});
    expect(explain.explain('de')).to.contain(
        'Die Business-Class-Tickets werden in Buchungsklasse K ausgestellt'
    );
  });
  it(`First`, () => {
    Object.defineProperty(explain, 'cabinclass', {value: 'F', configurable: true});
    expect(explain.explain('de')).to.contain(
        'Die First-Class-Tickets werden in Buchungsklasse K ausgestellt'
    );
  });
  it(`Kein Gepäck`, () => {
    Object.defineProperty(explain, 'no_luggage', {value: true, configurable: true});
    expect(explain.explain('de')).to.contain(
        'Bei diesem Tarif ist kein Aufgabegepäck inklusive.'
    );
  });
  it(`Hinflug-Wochentage`, () => {
    Object.defineProperty(explain, 'weekday_to', {value: ['MON', 'TUE', 'WED'], configurable: true});
    expect(explain.explain('de')).to.contain(
        'Allerdings darf der Abflug nur an einem Montag, Dienstag, oder Mittwoch stattfinden.'
    );
  });
  it(`Rückflug-Wochentage`, () => {
    Object.defineProperty(explain, 'weekday_from', {value: ['SUN', 'TUE', 'WED'], configurable: true});
    expect(explain.explain('de')).to.contain(
        'Der Rückflug darf nur an einem Sonntag, Dienstag, oder Mittwoch stattfinden.'
    );
  });
});

describe('Test month-day period to year-month-day periods', () => {
  it(`easy`, () =>
    expect(
      Explainer.month_day_period_to_yearly_periods(
        '10-01',
        '10-30',
        new Date('2021-07-14')
      )
    ).to.eql([
      {
        from: '2021-10-01',
        to: '2021-10-30',
      },
    ]));
  it(`now in period`, () =>
    expect(
      Explainer.month_day_period_to_yearly_periods(
        '07-01',
        '10-30',
        new Date('2021-07-14')
      )
    ).to.eql([
      {
        from: '2021-07-01',
        to: '2021-10-30',
      },
      {
        from: '2022-07-01',
        to: '2022-10-30',
      },
    ]));

  it(`period is this year in the past`, () =>
    expect(
      Explainer.month_day_period_to_yearly_periods(
        '01-10',
        '03-31',
        new Date('2021-07-14')
      )
    ).to.eql([
      {
        from: '2022-01-10',
        to: '2022-03-31',
      },
    ]));

  it(`period to is in the next year`, () =>
    expect(
      Explainer.month_day_period_to_yearly_periods(
        '12-10',
        '03-31',
        new Date('2021-07-14')
      )
    ).to.eql([
      {
        from: '2021-12-10',
        to: '2022-03-31',
      },
    ]));
});

describe('Test Properties', () => {
  Object.entries(farerules).forEach(([key, { expected, text }]) => {
    let explainer = new Explainer(text);
    if (expected.issued_until)
      it(`${key}: issued_until`, () =>
        expect(explainer.issued_until).to.equal(expected.issued_until));
    if (expected.advanced_reservation_days)
      it(`${key}: advanced_reservation_days`, () =>
        expect(explainer.advanced_reservation_days).to.equal(
          expected.advanced_reservation_days
        ));
    if (expected.travel_period)
      it(`${key}: travel_period`, () =>
        expect(explainer.travel_period).to.eql(expected.travel_period));
    if (expected.travel_commenced)
      it(`${key}: travel_commenced`, () =>
        expect(explainer.travel_commenced).to.eql(expected.travel_commenced));
    if (expected.travel_period_blackout)
      it(`${key}: travel_period_blackout`, () =>
        expect(explainer.travel_period_blackout).to.eql(
          expected.travel_period_blackout
        ));
    if (expected.travel_period_from)
      it(`${key}: travel_period_from`, () =>
        expect(explainer.travel_period_from).to.eql(
          expected.travel_period_from
        ));
    if (expected.travel_period_to)
      it(`${key}: travel_period_to`, () =>
        expect(explainer.travel_period_to).to.eql(expected.travel_period_to));
    if (expected.min_stay)
      it(`${key}: min_stay`, () =>
        expect(explainer.min_stay).to.eql(expected.min_stay));
    if (expected.max_stay)
      it(`${key}: max_stay`, () =>
        expect(explainer.max_stay).to.eql(expected.max_stay));
    if (expected.sunday_rule)
      it(`${key}: sunday_rule`, () =>
        expect(explainer.sunday_rule).to.equal(expected.sunday_rule));
    if (expected.booking_class)
      it(`${key}: booking_class`, () =>
        expect(explainer.booking_class).to.eql(expected.booking_class));
    if (expected.stopover)
      it(`${key}: stopover`, () =>
        expect(explainer.stopover).eql(expected.stopover));
    if (expected.weekday_from)
      it(`${key}: weekday_from`, () =>
        expect(explainer.weekday_from).to.eql(expected.weekday_from));
    if (expected.weekday_to)
      it(`${key}: weekday_to`, () =>
        expect(explainer.weekday_to).to.eql(expected.weekday_to));
    if (expected.child_charge)
      it(`${key}: child_charge`, () =>
        expect(explainer.child_charge).to.equal(expected.child_charge));
    if (expected.infant_charge)
      it(`${key}: infant_charge`, () =>
        expect(explainer.infant_charge).to.equal(expected.infant_charge));
    if (expected.infant_seat_charge)
      it(`${key}: infant_seat_charge`, () =>
        expect(explainer.infant_seat_charge).to.equal(
          expected.infant_seat_charge
        ));
    if (expected.cancelable)
      it(`${key}: cancelable`, () =>
        expect(explainer.cancelable).to.eql(expected.cancelable));
    if (expected.change)
      it(`${key}: change`, () =>
        expect(explainer.change).to.eql(expected.change));
    if (expected.cabinclass)
      it(`${key}: cabinclass`, () =>
        expect(explainer.cabinclass).to.eql(expected.cabinclass));
    if (expected.no_luggage)
      it(`${key}: no_luggage`, () =>
        expect(explainer.no_luggage).to.eql(expected.no_luggage));
  });
});
