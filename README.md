# 🦄 API Automation Tests

## 📌 Project Overview

This project contains automated API tests for the Unicorns API, implemented using Karate DSL and Maven.
The goal of this project is to validate CRUD operations following BDD practices, clean project structure, and industry-standard automation guidelines.

The tests are designed to be:

-  Easy to maintain

-  Readable by technical and non-technical stakeholders

-  Ready for CI/CD integration

## 🛠️ Tech Stack

- Java 17+
- Karate DSL 1.5.0
- Maven
- Gherkin (BDD)
- JavaScript (for dynamic test data generation)

## 📂 Project Structure

```bash
src
 └── test
     ├── java
     │   └── runners
     │       └── ApiRunnerTest.java
     └── resources
         ├── features
         │   └── unicorns.feature
         ├── models
         │   ├── requests
         │   │   └── unicorn-request.json
         │   └── responses
         │       └── unicorn-response.json
         ├── common
         │   └── helpers
         │       └── data.js
         └── karate-config.js
```

## 🧪 Test Scenarios Covered

- Get all unicorns (GET)
- Create a unicorn (POST)
- Update a unicorn (PUT) (in progress / optional)
- Schema validation for request and response payloads
- Dynamic test data generation (random name, age, color)

## 🚀 How to Run the Tests

### Prerequisites

- Java 17 or higher
- Maven installed
- Environment variables configured

Set environment variables
```bash
export BASE_URL=https://crudcrud.com/api
export API_KEY=your_api_key_here
```
Run all tests
```bash
mvn test
```
Run only smoke tests
```bash
mvn test -Dkarate.options="--tags @smoke"
```

## 📊 Test Reports
After execution, Karate generates an HTML report automatically.

📍 Location:
```bash
target/karate-reports/karate-summary.html
```