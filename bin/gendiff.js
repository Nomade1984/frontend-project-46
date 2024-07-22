#!/usr/bin/env node

import { program } from 'commander';

import path from 'path';

import { cwd } from 'node:process';

import compare from '../src/compare.js';

program.name('gendiff').description('Compares two configuration files and shows a difference.').version('1.0.0');

program.usage('[options] <filepath1> <filepath2>');

program.option('-f, --format [type]', 'output format');

program
  .argument('<fileOne>', 'integer argument')
  .argument('<fileTwo>', 'integer argument')
  .action((fileOne, fileTwo) => {
    let makeAddress1;
    let makeAddress2;

    const firstLetter1 = fileOne[0];
    const firstLetter2 = fileTwo[0];

    if (firstLetter1 === '/') {
      makeAddress1 = `${cwd(fileOne)}${fileOne}`;
    } else {
      makeAddress1 = path.resolve(fileOne);
    }

    if (firstLetter2 === '/') {
      makeAddress2 = `${cwd(fileTwo)}${fileTwo}`;
    } else {
      makeAddress2 = path.resolve(fileTwo);
    }

    compare(makeAddress1, makeAddress2);
  });

program.parse();
