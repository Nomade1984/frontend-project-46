#!/usr/bin/env node

import { program } from 'commander';

program.name('gendiff').description('Compares two configuration files and shows a difference.').version('1.0.0');

program.usage('[options] <filepath1> <filepath2>');

program.option('-f, --format [type]', 'output format');

program.parse();
