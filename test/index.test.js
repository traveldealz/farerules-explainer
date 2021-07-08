// BDD-Style Testing (powered by https://mochajs.org/)
//
// Use any assert library
import chai from 'chai/chai.js';
const expect = chai.expect;

import Explainer from './../src/explainer.js';

import * as farerules from './data/farerules.js';


describe("Test Properties", function() {
  Object.entries(farerules).forEach( ([key, {expected, text}]) => {
    it(`issued_unti at ${key}`, () => expect((new Explainer(text).issued_until)).to.equal(expected.issued_until) );
  } );
  
});
