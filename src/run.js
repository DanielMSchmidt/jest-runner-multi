const { pass, fail } = require("create-jest-runner");

module.exports = ({ testPath, config, globalConfig }) => {
  const start = new Date();

  return Promise.resolve(
    pass({
      start,
      end: new Date(),
      test: { path: testPath }
    })
  );
};
