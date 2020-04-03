Feature: Version

  @api
  Scenario: Invalid Auth Token
    Given I have a bad token
    Then I should not see the version