# Jest Runner Multi

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

