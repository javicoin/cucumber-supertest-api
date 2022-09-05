Feature: /tokens endpoint validation

@smoke
Scenario: GET request - 200 OK
    When GET tokens
    Then 200 OK response

@smoke
Scenario: error response
    When GET tokens
    Then error response

@regression
Scenario: schema validation
    When GET tokens
    Then response schema validation

@regression
Scenario: schema validation
    When GET tokens
    Then mocked response schema validation
