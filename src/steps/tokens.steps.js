const { When, Then } = require('@cucumber/cucumber');
const request = require('supertest');
const expect = require('expect');
// Other assertion libraries
// const expect = require('chai').expect;
// const assert = require('chai').assert
// const assert = require('assert');
// const {expect} = require('@jest/expect');
// require('jest-extended') - extra config needed
const Ajv = require("ajv")
const schemaValidator = new Ajv() 

const API_URL = require("../../config/cucumber").default.environment.API_URL;
const schema = require("../endpoints/tokens/schema")
const mockedResponse = require("../endpoints/tokens/tokens.data.json")

let response;

When(/^GET tokens$/, async function() {
  response = await request(API_URL).get("/tokens");
});

Then(/^200 OK response$/, () => {
    expect(response.status).toBe(200);
});

Then(/^error response$/, () => {
    expect(response.status).toBe(100);

});

Then(/^response schema validation$/, () => {
  const validate = schemaValidator.compile(schema);
  const valid = validate(response.body);
  if (!valid) console.log(validate.errors);
  expect(valid).toBeTruthy();
});

Then(/^mocked response schema validation$/, () => {
  const validate = schemaValidator.compile(schema);
   const valid = validate(mockedResponse);
  if (!valid) console.log(validate.errors);
  expect(valid).toBeTruthy();
});
