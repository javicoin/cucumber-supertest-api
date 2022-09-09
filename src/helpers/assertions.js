const expect = require('expect')
const Ajv = require("ajv")
const schemaValidator = new Ajv()

class Assertion {

    validateSchema(schema, payload) {
        const validate = schemaValidator.compile(schema);
        const valid = validate(payload);
        try {
            expect(valid).toBeTruthy();
        } catch (error) {
            throw new Error(JSON.stringify(validate.errors, undefined, 4));  
        }
    }

    expectToBe(expected, received) {
        try {
            expect(received).toBe(expected);
        } catch (error) {
            throw new Error(JSON.stringify(error.matcherResult, undefined, 4));  
        }
    }
}
module.exports = new Assertion();
