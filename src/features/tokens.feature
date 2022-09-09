Feature: /tokens endpoint validation

@smoke
Scenario: GET request - 200 OK
    When GET tokens
    Then I expect response status code to be "200"

@smoke
Scenario: error response
    When GET tokens
    Then I expect response status code to be "400"

@regression
Scenario: response schema validation
    When GET tokens
    Then response schema validation

@regression
Scenario: mocked response schema validation
    When GET tokens
    Then mocked response schema validation
