// BDD-Style Testing (powered by https://mochajs.org/)
//
// Use any assert library
import chai from 'chai/chai.js';
const expect = chai.expect;

import Explainer from './../src/explainer.js';

import * as farerules from './data/farerules.js';

describe('Test Properties', function () {
  Object.entries(farerules).forEach(([key, { expected, text }]) => {
    if (expected.issued_until)
      it(`${key}: issued_until`, () =>
        expect(new Explainer(text).issued_until).to.equal(
          expected.issued_until
        ));
    if (expected.advanced_reservation_days)
      it(`${key}: advanced_reservation_days`, () =>
        expect(new Explainer(text).advanced_reservation_days).to.equal(
          expected.advanced_reservation_days
        ));
    if (expected.travel_period)
      it(`${key}: travel_period`, () =>
        expect(new Explainer(text).travel_period).to.eql(
          expected.travel_period
        ));
    if (expected.travel_period_blackout)
      it(`${key}: travel_period_blackout`, () =>
        expect(new Explainer(text).travel_period_blackout).to.eql(
          expected.travel_period_blackout
        ));
    if (expected.travel_period_from)
      it(`${key}: travel_period_from`, () =>
        expect(new Explainer(text).travel_period_from).to.eql(
          expected.travel_period_from
        ));
    if (expected.travel_period_to)
      it(`${key}: travel_period_to`, () =>
        expect(new Explainer(text).travel_period_to).to.eql(
          expected.travel_period_to
        ));
    if (expected.min_stay)
      it(`${key}: min_stay`, () =>
        expect(new Explainer(text).min_stay).to.eql(expected.min_stay));
    if (expected.max_stay)
      it(`${key}: max_stay`, () =>
        expect(new Explainer(text).max_stay).to.eql(expected.max_stay));
    if (expected.sunday_rule)
      it(`${key}: sunday_rule`, () =>
        expect(new Explainer(text).sunday_rule).to.equal(expected.sunday_rule));
    if (expected.booking_class)
      it(`${key}: booking_class`, () =>
        expect(new Explainer(text).booking_class).to.eql(
          expected.booking_class
        ));
    if (expected.stopover)
      it(`${key}: stopover`, () =>
        expect(new Explainer(text).stopover).eql(expected.stopover));
  });
});
