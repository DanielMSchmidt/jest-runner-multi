⚠️⚠️⚠️ You probably don't need this project, use the jest implementation itself instead: https://facebook.github.io/jest/docs/en/configuration.html#projects-array-string-projectconfig

I didn't find it in the docs so I started to create this 🙈

# Jest Runner Multi [![Build Status](https://travis-ci.org/DanielMSchmidt/jest-runner-multi.svg?branch=master)](https://travis-ci.org/DanielMSchmidt/jest-runner-multi)

If you want to have multiple jest runners in the same project, this project is for you.

## Configuration

Your `package.json` looks like this:

```json
{
  "jest": {
    "runner": "jest-runner-multi",
    "moduleFileExtensions": [
      "css",
      "js"
    ],
    "testMatch": [
      "**/*.{css,js}"
    ]
  },
  "jest-runner-multi": {
    "**/*.test.js": "jest", // default jest runner
    "**/*.js": "jest-runner-eslint", // additional eslint runner for eslint
    "**/*.css": "jest-runner-stylelint", // runner for css
  }
}
```

