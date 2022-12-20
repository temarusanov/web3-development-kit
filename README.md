# Web3 development kit

## What's this for?

Nx monorepo that prepared to develop contract and frontend in one repository. Main feature of that is contracts' SDK for web applications.
Develop and build full typed applications.

## Used with

- [Nx](https://nx.dev/). Monorepo orchestrator
- [eth-sdk](https://github.com/dethcrypto/eth-sdk). Type-safe, lightweight SDKs for Ethereum smart contracts
- [Hardhat](https://hardhat.org/). Ethereum development environment

## Usage

First, install dependencies. Installing will build contract SDK for you. If you have any config in `packages/contracts/sdk` folder

```bash
yarn install
```

Then, create a web application (React, Vue, Angular) and add `contracts` package for you dependencies

```json
// packages/sample/package.json

{
  "name": "sample",
  "version": "0.0.0",
  "main": "dist/index.js",
  "devDependencies": {},
  "scripts": {
    "build": "tsc index.ts --outDir dist"
  },
  "dependencies": {
    "contracts": "*" // <-- add this line
  }
}
```

It need to tell Nx that your package is depend on `contracts` package. After that on every `build` script in your package Nx will regenerate SDK for you.
So, you always have a fresh SDK of contracts

Configure your SDK using [`eth-sdk` package](https://github.com/dethcrypto/eth-sdk)

## Examples

Check out [the sample](./packages/sample/index.ts) for examples



