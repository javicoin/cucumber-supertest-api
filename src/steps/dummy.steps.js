const { When, Then } = require('@cucumber/cucumber');
const request = require('supertest');
const expect = require('expect');
// Other assertion libraries
// const expect = require('chai').expect;
// const assert = require('chai').assert
// const assert = require('assert');
// const {expect} = require('@jest/expect');
// require('jest-extended') - extra config needed


const baseUrl = 'http://localhost:3000';

let response;

When(/^GET tokens$/, async function() {
  response = await request(baseUrl)
  .get("/tokens")
  .expect(200);
  //expect(response.status).toBe(200);
  //expect(response.body.name).toContain("Dollar on Chain");
});

Then(/^200 OK response$/, () => {
    expect(response.status).toBe(200);
});

Then(/^error response$/, () => {
    expect(response.status).toBe(100);
});
