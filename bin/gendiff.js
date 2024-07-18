#!/usr/bin/env node

import { program } from 'commander';

import compare from '../src/compare.js';

program.name('gendiff').description('Compares two configuration files and shows a difference.').version('1.0.0');

program.usage('[options] <filepath1> <filepath2>');

program.option('-f, --format [type]', 'output format');

program
  .argument('<fileOne>', 'integer argument')
  .argument('<fileTwo>', 'integer argument')
  .action((fileOne, fileTwo) => {
    compare(fileOne);
    compare(fileTwo);
  });

program.parse();
