// BDD-Style Testing (powered by https://mochajs.org/)
//
// Use any assert library
import chai from 'chai/chai.js';
const expect = chai.expect;

import Explainer from './../src/explainer.js';

import * as farerules from './data/farerules.js';

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
  });
});
