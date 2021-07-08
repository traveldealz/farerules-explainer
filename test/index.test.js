// BDD-Style Testing (powered by https://mochajs.org/)
//
// Use any assert library
import chai from 'chai/chai.js';
const expect = chai.expect;

import Explainer from './../src/explainer.js';

import * as farerules from './data/farerules.js';


describe("Test Properties", function() {
  Object.entries(farerules).forEach( ([key, {expected, text}]) => {
    it(`${key}: issued_until`, () => expect((new Explainer(text).issued_until)).to.equal(expected.issued_until ?? null) );
    it(`${key}: advanced_reservation_days`, () => expect((new Explainer(text).advanced_reservation_days)).to.equal(expected.advanced_reservation_days ?? null) );
    it(`${key}: travel_period_from`, () => expect((new Explainer(text).travel_period_from)).to.eql(expected.travel_period_from ?? null) );
    it(`${key}: travel_period_to`, () => expect((new Explainer(text).travel_period_to)).to.eql(expected.travel_period_to ?? null) );
  } );
  
});
