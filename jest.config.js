module.exports = {
  testEnvironment: 'node', // Default for most tests
  projects: [
    {
      displayName: 'node',
      testEnvironment: 'node',
      testMatch: ['**/tests/**/*.test.js']
    },
    {
      displayName: 'jsdom',
      testEnvironment: 'jsdom',
      testMatch: ['**/tests/**/*.dom.test.js'] // Different pattern for DOM tests
    }
  ]
};