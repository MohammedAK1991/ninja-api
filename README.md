<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

This repository contains a basic backend server built with NestJS, a progressive Node.js framework for building efficient and scalable server-side applications. The backend server is fully functioning and connected to a real MongoDB Atlas cluster.

## Features

- **MongoDB Atlas Integration:** The backend is connected to a MongoDB Atlas cluster, providing a scalable and reliable database solution.
- **NestJS Framework:** Built using the NestJS framework, which is designed to make the development of server-side applications straightforward and enjoyable.

## Installation

MongoDB Configuration
Configure your MongoDB connection by creating a .env file in the root directory of your project. Add the following line, replacing <your_mongodb_uri> with your MongoDB Atlas URI:

```
MONGODB_URI=<your_mongodb_uri>
```

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

