Feature: /tokens endpoint validation

@smoke
Scenario: GET request - 200 OK
    When GET tokens
    Then 200 OK response

@regression
Scenario: error response
    When GET tokens
    Then error response