#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { promisify } = require('util');
const glob = promisify(require('glob'));
const execa = require('execa');

const argv = yargs(hideBin(process.argv))
  .strict()
  .option('clang-format-bin', {
    type: 'string',
    default: 'clang-format'
  })
  .argv;

(async () => {
  for (const source of argv._) {
    const matches = await glob(source);
    if (matches.length > 0) {
      await execa(argv['clang-format-bin'], ['-i', ...matches]);
    } else {
      console.warn(`glob "${source}" didn't match any file`);
    }
  }
})().catch(err => {
  console.error(err);
  process.exit(1);
})
