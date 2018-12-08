Base webpack configuration for NoFlo component projects [![Build Status](https://travis-ci.org/noflo/noflo-webpack-config.svg?branch=master)](https://travis-ci.org/noflo/noflo-webpack-config)
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

Note: if you have CoffeeScript dependencies, install also the `coffee-loader` package.

## Testing components with fbp-spec in browser

You need to add the following development dependencies:

* `fbp-spec`

Then add a test command to your NPM scripts:

```
"test": "fbp-spec --address ws://localhost:3569 --command \"noflo-runtime-headless -f dist/test.js\" spec/*.yaml",
```

## Changes

* 1.1.0 (December 8th 2018)
  - Fixed baseDir setting to `process.cwd()`
  - Added basic usage documentation
  - Added example Karma configuration
* 1.0.0 (December 8th 2018)
  - Initial version
