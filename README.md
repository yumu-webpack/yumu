# yumu

[![NPM version](https://img.shields.io/npm/v/yumu.svg?style=flat)](https://npmjs.org/package/yumu)
[![Github All Releases](https://img.shields.io/github/downloads/yumu-webpack/yumu/total.svg)]()

[![GitHub stars](https://img.shields.io/github/stars/yumu-webpack/yumu.svg?style=social&label=Star)]()
[![GitHub forks](https://img.shields.io/github/forks/yumu-webpack/yumu.svg?style=social&label=Fork)]()

yumu webpack and react solution

----

## Feature

- Generate a [webpack](https://github.com/webpack/webpack) based boilerplate.
- Run a local server for web developer, support proxy and HMR.
- Easy to use and customize third-party UI components.
- Support customized webpack.config.js.
- Support `buildvars` to automatically output bundles with different varible combinations.


## Install

- Install yumu

```bash
$ npm i yumu -g
```


## Usage

- Generate a boilerplate.

```bash
$ yumu init
```

- Install the dependencies.

```bash
$ cd xx(the project path)
$ yumu install
```

- Start a local dev server.

```bash
$ yumu server
```
> It will listen to the port 8080

- Build project.

```bash
$ yumu build
```
