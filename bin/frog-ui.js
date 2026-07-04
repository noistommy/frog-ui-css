#!/usr/bin/env node

'use strict';

const {init} = require('../lib/init');

const args = process.argv.slice(2);
const command = args[0];
const commandArgs = args.slice(1);

const help = () => {
  console.log(`Frog UI CLI

Usage:
  frog-ui init [options]

Options:
  --yes, -y            Create frog.config.json with defaults
  --force             Overwrite an existing frog.config.json
  --out <path>        Output directory for generated files
  --theme <name>      Theme name: frogui, gcloud, gcloud_p, beui, custom
  --primary <color>   Primary token value
  --font-size <size>  Base font size token value
  --radius <size>     Border radius token value
  --help, -h          Show this help
`);
};

const main = () => {
  if (!command || command === '--help' || command === '-h') {
    help();
    return;
  }

  if (command === 'init') {
    init(commandArgs);
    return;
  }

  console.error(`Unknown command: ${command}`);
  help();
  process.exitCode = 1;
};

main();
