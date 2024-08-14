const fs = require('fs');
const path = require('path');

const mergeReports = (reportPaths, outputPath) => {
  let mergedReport = {
    suites: [],
    errors: [],
    duration: 0,
    stats: {
      total: 0,
      passed: 0,
      failed: 0,
      skipped: 0,
    }
  };

  reportPaths.forEach((reportPath) => {
    const report = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));
    
    // Merge suites
    mergedReport.suites.push(...report.suites);

    // Merge errors
    mergedReport.errors.push(...report.errors);

    // Accumulate duration
    mergedReport.duration += report.duration;

    // Accumulate stats
    mergedReport.stats.total += report.stats.total;
    mergedReport.stats.passed += report.stats.passed;
    mergedReport.stats.failed += report.stats.failed;
    mergedReport.stats.skipped += report.stats.skipped;
  });

  // Write the merged report to the output file
  fs.writeFileSync(outputPath, JSON.stringify(mergedReport, null, 2));
  console.log(`Merged report written to ${outputPath}`);
};

const reportDir = 'reports'; // Directory where individual shard reports are stored
const outputReport = 'merged-report.json'; // Path to the merged report output

const reportFiles = fs.readdirSync(reportDir).map(file => path.join(reportDir, file));
mergeReports(reportFiles, outputReport);
