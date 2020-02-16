module.exports = {
  preset: 'jest-preset-angular',
  setupTestFrameworkScriptFile: '<rootDir>/src/setup-jest.ts',
  collectCoverageFrom: [
      "src/**/*.{js,jsx,ts,tsx}",
      "!<rootDir>/node_modules/"
  ],
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@state/(.*)': '<rootDir>/src/app/state/$1'
  }
};
