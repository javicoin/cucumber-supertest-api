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
const ajv = new Ajv() 

const baseUrl = 'http://localhost:3000';
const schema = require("../endpoints/tokens/schema")
// const data = require("../endpoints/tokens/tokens.data.json")
let response;

When(/^GET tokens$/, async function() {
  response = await request(baseUrl)
  .get("/tokens")
  .expect(200);
});

Then(/^200 OK response$/, () => {
    expect(response.status).toBe(200);
});

Then(/^error response$/, () => {
    expect(response.status).toBe(100);

});

Then(/^schema validation$/, () => {
  const validate = ajv.compile(schema);
  // const valid = validate(data);
  const valid = validate(response.body);
  if (!valid) console.log(validate.errors);
  expect(valid).toBeTruthy();
});
