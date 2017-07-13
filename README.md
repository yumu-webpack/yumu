# yumu

[![NPM version](https://img.shields.io/npm/v/yumu.svg?style=flat)](https://npmjs.org/package/yumu)

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
$ nowa install
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
