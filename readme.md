# NodeJS Express template
This repository is a personal starter template that I've developed following [Rodrigo Manguinho](https://github.com/rmanguinho)'s [**NodeJS, Typescript, TDD, DDD, Clean Architecture and SOLID**](https://www.udemy.com/course/tdd-com-mango/?referralCode=B53CE5CA2B9AFA5A6FA1) course, which aims to show how to create an API with a well-defined and decoupled architecture, using TDD (test-oriented programming) as a working methodology, Clean Architecture to distribute responsibilities in layers, always following the principles of SOLID and, whenever possible, applying Design Patterns to solve some common problems.

## Running locally
There're two different ways of running this project locally:
- Running `npm run dev`, which is going to run only the node server;
- Running `docker-compose up --build`.

> *They both listen to changes in code and reload the server when activated using nodemon.*

## Layers
This section is focused on explaining how every layer works, and what should it do. Essentialy, there are 4 of them, from the outermost to innermost: `main`, `presentation`, `data` and `infra`.

> ### Main Layer
It's responsible for receiving requests and adapting its data to call a `Controller`, which is the entry point of the `presentation` layer. Here's also where servers are created, as well as factories are made. In other words, it's the first layer that gets called when there's an API call.

> ### Presentation layer
Its main reason is to hold `Controllers`, which are a composition of methods to be applied to a request and what it should return. Mostly here's where the endpoint's business logic is placed. Things that is going to happen in this layer:
- Call method to read something from a data source;
- Call validation method;
- Return correct status code and body.

> ### Data layer
Deals with all sorts of things regarding data, calling methods to parse and store in correct places. Contains business logic regarding to it to. Things that is going to happen in this layer:
- Check if data to be stored isn't already registered;
- Call method to store data;
- Parse data to return properly.

> ### Infra layer
Is the most coupled layer of them all, responsible of implementing adapters for libraries and storage mechanisms.

## Tests
There are two different types of tests done here, being unit and integration tests, both using Jest. The unit ones are specified with ending as `*.spec.ts` and the integration with `*.test.ts`.

To run the tests, you can choose one of the following scripts:
- `npm test`: run every test once;
- `npm run test:coverage`: run every test once but it will throw if coverage is bellow minimum threshold;
  - The threshold can be configured in `./jest-configs/coverage.ts`.
- `npm run test:integration`: runs integration tests in watch mode;
- `npm run test:unit`: runs unit tests in watch mode.


## Libraries
- Routing:
  - `express`.
- Validation:
  - `joi`.
- Linting:
  - `eslint`;
  - `prettier`.
- Testing:
  - `jest`;
  - `@faker-js/faker`;
  - `supertest`.