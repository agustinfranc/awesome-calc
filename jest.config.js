module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/components/**/*.vue",
    "<rootDir>/src/views/**/*.vue",
  ],
};
