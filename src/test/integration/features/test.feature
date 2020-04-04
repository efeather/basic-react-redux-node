Feature: Basic Test
  @api
  @gui
  Scenario: Test same step name in api and gui
    Then should pass

  @api
  @gui
  Scenario: Test step in common
    Then should pass also