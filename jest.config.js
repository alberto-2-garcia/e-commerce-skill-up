/** @type {import('jest').Config} */
export default {
    clearMocks: true,
    restoreMocks: true,
    collectCoverage: true,
    testEnvironment: 'jest-fixed-jsdom',
    coveragePathIgnorePatterns: [
        'src/theme.ts',
        'src/store/index.ts',
        'src/api/index.ts',
        'src/main.tsx',
        'src/App.tsx',
    ],
    collectCoverageFrom: ['src/**/*.ts*', '!**/node_modules/**'],
    coverageDirectory: 'jest-coverage',
    coverageThreshold: {
        global: {
            branches: 10,
            functions: 10,
            lines: 10,
            statements: 10,
        },
    },
    testMatch: ['**/*.test.ts*'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/'],
    testEnvironmentOptions: {
        customExportConditions: [''],
    },
};
