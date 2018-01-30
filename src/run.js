const { pass, fail } = require("create-jest-runner");
const glob = require("glob").sync;

const root = process.cwd();
const ownConfig = require(root + "/package.json")["jest-runner-multi"];
const files = {};
Object.entries(ownConfig).forEach(([pattern, runner]) => {
  glob(pattern, {
    cwd: root
  })
    .map(relativePath => root + "/" + relativePath)
    .forEach(filePath => {
      files[filePath] = files[filePath] || [];
      files[filePath].push(runner);
    });
});
Object.entries(files).forEach(
  ([filePath, runners]) =>
    (files[filePath] = runners.map(runner => require.resolve(runner)))
);

module.exports = ({ testPath, config, globalConfig }) => {
  const start = new Date();
  const runnersForPath = files[testPath];

  // TODO: allow more than the first one
  const runner = runnersForPath[0];
  return runner({ testPath, config, globalConfig });
};
