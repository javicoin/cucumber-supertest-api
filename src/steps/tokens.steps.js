const { When, Then } = require('@cucumber/cucumber');
const request = require('supertest');
const Assertion = require('../helpers/assertions');
// Other assertion libraries
// const expect = require('chai').expect;
// const assert = require('chai').assert
// const assert = require('assert');
// const {expect} = require('@jest/expect');
// require('jest-extended') - extra config needed

const API_URL = require("../../config/cucumber").default.environment.API_URL;
const schema = require("../endpoints/tokens/schema")
const mockedResponse = require("../endpoints/tokens/tokens.data.json");

let response;

When(/^GET tokens$/, async function() {
  response = await request(API_URL).get("/tokens");
});

Then(/^I expect response status code to be "(200|400)"$/, (status) => {
    //expect(response.status).toBe(parseInt(status,10));
    Assertion.expectToBe(response.status, parseInt(status,10));
});

Then(/^response schema validation$/, () => {
  Assertion.validateSchema(schema, response.body);  
});

Then(/^mocked response schema validation$/, () => {
  Assertion.validateSchema(schema, mockedResponse);
});
