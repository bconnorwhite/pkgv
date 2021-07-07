<div align="center">
  <h1>pkgv</h1>
  <a href="https://npmjs.com/package/pkgv">
    <img alt="NPM" src="https://img.shields.io/npm/v/pkgv.svg">
  </a>
  <a href="https://github.com/bconnorwhite/pkgv">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/pkgv.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/pkgv?branch=master">
    <img alt="Coverage Status" src="https://coveralls.io/repos/github/bconnorwhite/pkgv/badge.svg?branch=master">
  </a>
  <a href="https://github.com/bconnorwhite/pkgv">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/bconnorwhite/pkgv?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> CLI to get the version of a project's package.json.

## Installation

```sh
yarn add pkgv
```

```sh
npm install pkgv
```

## CLI Usage

```sh
yarn pkgv
```

```sh
npx pkgv
```

## API Usage

```ts
import { getPackageVersion } from "pkgv";

const version = await getPackageVersion();
```

## Types
```ts
import { getPackageVersion } from "pkgv";

function getPackageVersion(): Promise<string | undefined>;
```

<br />

<h2>Dependencies<img align="right" alt="dependencies" src="https://img.shields.io/david/bconnorwhite/pkgv.svg"></h2>

- [@bconnorwhite/package](https://www.npmjs.com/package/@bconnorwhite/package): A utility for reading package.json of a project, and forming paths relative to it.
- [commander-version](https://www.npmjs.com/package/commander-version): A wrapper for Commander that automatically sets the version based on your package.json

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/pkgv.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects
- [@types/mock-fs](https://www.npmjs.com/package/@types/mock-fs): TypeScript definitions for mock-fs
- [mock-fs](https://www.npmjs.com/package/mock-fs): A configurable mock file system.  You know, for testing.

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/pkgv.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)
