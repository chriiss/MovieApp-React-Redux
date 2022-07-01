// const { pathsToModuleNameMapper } = require('ts-jest');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  "transform": {
    "\\.[j]sx?$": "babel-jest",
  },

//   moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/../../' }),
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/apps/react-app/tsconfig.spec.json',
    },
  },
  coverageDirectory: '../../coverage/libs/core',
  coverageReporters: ['html'],
//   setupFiles: ['./jest.setup.ts'],
  displayName: 'react test app',
};