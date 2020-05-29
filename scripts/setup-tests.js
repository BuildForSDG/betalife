const CI = process.env.CI || false;

if (!CI) {
  // Set the image that @databases/pg-test should use for testing
  process.env.PG_TEST_IMAGE = 'circleci/postgres:11.6-alpine-ram';
  process.env.PG_TEST_DB = 'betalifeDB';
  process.env.ACCESS_TOKEN_SECRET =
    process.env.ACCESS_TOKEN_SECRET || 'this is a sample seccret';
  process.env.NODE_ENV = 'test';
}

const jest = require('jest');

jest.run();
