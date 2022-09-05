const common = {
  parallel: 2,
  format: ['progress-bar', 'cucumber-console-formatter', 'json:./reports/json/cucumber-report.json', 'html:./reports/html/cucumber-report.html'],
  paths: ['./src/features/*.feature'],
  require: ['./src/steps/*steps.js'],
  publishQuiet: true,
  environment: {
    API_URL: 'http://localhost:3000'
  }
}

module.exports = {
  default: {
    ...common
  },
  smoke: {
    ...common,
    tags: "@smoke",
  },
  regression: {
    ...common,
    tags: "@regression and not @smoke",
  }
};
