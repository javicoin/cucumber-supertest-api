const reporter = require('cucumber-html-reporter');

const options = {
        theme: 'bootstrap',
        jsonFile: './reports/json/cucumber_report.json',
        output: './reports/html/cucumber_report1.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "QA",
            "Platform": "API calls",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };

    reporter.generate(options);