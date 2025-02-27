/** @type {import('jest').Config} */
export default {
    clearMocks: true,
    restoreMocks: true,
    collectCoverage: true,
    testEnvironment: 'jest-fixed-jsdom',
    // coveragePathIgnorePatterns: [
    //     'src/theme.js',
    //     'src/store/index.js',
    //     'src/api/index.js',
    //     'src/main.jsx',
    //     'src/App.jsx',
    // ],
    collectCoverageFrom: ['src/**/*.ts*', '!**/node_modules/**'],
    coverageDirectory: 'jest-coverage',
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -20,
        },
    },
    testMatch: ['**/*.test.js*'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/'],
    testEnvironmentOptions: {
        customExportConditions: [''],
    },
};
