@smoke
Feature: Unicorns API tests

  Background:
    * url baseUrl
    * def apiKey = apiKey
    * def unicornRequestSchema = read('classpath:models/requests/unicorn-request.json')
    * def unicornResponseSchema = read('classpath:models/responses/unicorn-response.json')
    * def data = karate.call('classpath:common/helpers/data.js')

  Scenario: Get all unicorns
    Given path 'api', apiKey, 'unicorns'
    When method get
    Then status 200
    And match response == '#[]'
    And match each response == unicornResponseSchema

  Scenario: Create unicorn
    * def requestBody = data.unicorn()
    * match requestBody == unicornRequestSchema
    Given path 'api', apiKey, 'unicorns'
    And request requestBody
    When method post
    Then status 201
    And match response == unicornResponseSchema

  Scenario: Update unicorn
    * def createBody = data.unicorn()
    Given path 'api', apiKey, 'unicorns'
    And request createBody
    When method post
    Then status 201
    * def unicornId = response._id
    * def updateBody = data.unicorn()
    Given path 'api', apiKey, 'unicorns', unicornId
    And request updateBody
    When method put
    Then status 200

  Scenario: Delete unicorn
    * def createBody = data.unicorn()
    Given path 'api', apiKey, 'unicorns'
    And request createBody
    When method post
    Then status 201
    * def unicornId = response._id
    Given path 'api', apiKey, 'unicorns', unicornId
    When method delete
    Then status 200
