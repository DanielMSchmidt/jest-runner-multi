const { skip } = require("create-jest-runner");
const minimatch = require("minimatch");

const root = process.cwd();
const ownConfig = require(root + "/package.json")["jest-runner-multi"];

// Load runner
const runners = {};
// Object.values(ownConfig).forEach(runnerName => runners[runnerName] = require.resolve(runnerName));
Object.values(ownConfig).forEach(
  runnerName => (runners[runnerName] = runnerName)
);

module.exports = ({ testPath, config, globalConfig }) => {
  const start = new Date();
  const runnersForPath = Object.entries(ownConfig)
    .filter(([pattern]) => minimatch(testPath, pattern))
    .map(([, runnerName]) => runners[runnerName]);

  if (!runnersForPath.length) {
    // No runner found, so we skip
    return skip({
      start,
      end: new Date(),
      test: {
        path: testPath
      }
    });
  }
  // TODO: allow more than the first one
  const runner = runnersForPath[0];
  return runner({ testPath, config, globalConfig });
};
