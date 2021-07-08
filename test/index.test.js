// BDD-Style Testing (powered by https://mochajs.org/)
//
// Use any assert library
import chai from 'chai/chai.js';
const expect = chai.expect;

import Explainer from './../src/explainer.js';

import * as farerules from './data/farerules.js';


describe("Test Properties", function() {
  Object.entries(farerules).forEach( ([key, {expected, text}]) => {
    if(expected.issued_until) it(`${key}: issued_until`, () => expect((new Explainer(text).issued_until)).to.equal(expected.issued_until) );
    if(expected.advanced_reservation_days) it(`${key}: advanced_reservation_days`, () => expect((new Explainer(text).advanced_reservation_days)).to.equal(expected.advanced_reservation_days) );
    if(expected.travel_period)  it(`${key}: travel_period`, () => expect((new Explainer(text).travel_period)).to.eql(expected.travel_period) );
    if(expected.travel_period_blackout)  it(`${key}: travel_period_blackout`, () => expect((new Explainer(text).travel_period_blackout)).to.eql(expected.travel_period_blackout) );
    if(expected.travel_period_from) it(`${key}: travel_period_from`, () => expect((new Explainer(text).travel_period_from)).to.eql(expected.travel_period_from) );
    if(expected.travel_period_to) it(`${key}: travel_period_to`, () => expect((new Explainer(text).travel_period_to)).to.eql(expected.travel_period_to) );
  } );
  
});
