Base webpack configuration for NoFlo component projects
=======================================================

This repository aims to provide a reusable WebPack configuration for NoFlo component projects, primarily aimed at CI usage.

## Build setup

You need to add the following development dependencies:

* `webpack`
* `webpack-cli`
* `noflo-component-loader`
* `noflo-runtime-headless`
* `noflo-runtime-postmessage`

Then add a build command to your NPM scripts:

```
"build": "webpack --config node_modules/noflo-webpack-config/webpack.config.js",
```

Now you should be able to make a browser build of your components with `npm run build`.

Note: if you have CoffeeScript dependencies, install also the `coffee-loader` package.

## Testing components with fbp-spec in browser

You need to add the following development dependencies:

* `fbp-spec`

Then add a test command to your NPM scripts:

```
"test:fbp-spec": "fbp-spec --address ws://localhost:3569 --command \"noflo-runtime-headless -f dist/test.js\" spec/*.yaml",
```

Now you should be able to run fbp-specs in a browser with `npm run test:fbp-spec`.

## Testing components with Mocha in browser

You need to add the following development dependencies:

* `chai`
* `karma`
* `karma-chai`
* `karma-chrome-launcher`
* `karma-mocha`
* `karma-mocha-reporter`

Then add a test command to your NPM scripts:

```
"test:mocha": "karma start node_modules/noflo-webpack-config/karma.config.js",
```

Now you should be able to run Mocha tests in a browser with `npm run test:mocha`.

Notes:

* `noflo`, `chai` and `baseDir` are available globally, so no need for additional requires in your test files
* the test files should be located in `spec/*.js` or `spec/**/*.js`

## Changes

* 2.0.1 (October 13th 2020)
  - Now HTML files in the dist folder will also be served by Karma for test purposes
* 2.0.0 (October 13th 2020)
  - Compatibility with [WebPack 5.x](https://blog.sindresorhus.com/webpack-5-headache-b6ac24973bf1)
* 1.1.0 (December 8th 2018)
  - Fixed baseDir setting to `process.cwd()`
  - Added basic usage documentation
  - Added example Karma configuration
* 1.0.0 (December 8th 2018)
  - Initial version
