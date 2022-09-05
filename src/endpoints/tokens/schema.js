const schema = {
    type: "array",
    minItems: 1,
    items: {
      type: "object",
      properties: {
        name: {type: "string", "minLength":1},
        symbol: {type: "string", "minLength":1},
        contractAddress: {type: "string", "minLength":1},
        decimals: {type: "integer"}
      },
      required: ["name", "symbol", "contractAddress", "decimals"]
    },
    uniqueItems: true,
    //additionalProperties: false,
}
module.exports = schema;