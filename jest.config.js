module.exports = {
  preset: 'jest-preset-angular',
  setupTestFrameworkScriptFile: '<rootDir>/src/setup-jest.ts',
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts}"],
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@state/(.*)': '<rootDir>/src/app/state/$1'
  }
};
