/* eslint-disable import/no-extraneous-dependencies */
const pgTeardown = require('@databases/pg-test/jest/globalTeardown');

async function teardown() {
  await Promise.all([pgTeardown()]);
}

module.exports = teardown;
