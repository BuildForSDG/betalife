module.exports = {
  moduleFileExtensions: ['js', 'json'],
  testRegex: ['.spec.js$', '.test.js$'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['dist'],
  globalSetup: '<rootDir>/node_modules/@databases/pg-test/jest/globalSetup.js',
  globalTeardown: '<rootDir>/scripts/globalJestTeardown.js'
};
