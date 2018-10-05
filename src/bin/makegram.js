#!/usr/bin/env node

import program from 'commander';
import getGrams from '../algorithms/countGrams';

program
  .version('1.0.0')
  .arguments('<file>, <gramLength>')
  .description('draws a portrait of a text by counting n-grams')
  .action((file, gramLength) =>
    getGrams(file, gramLength));
program.parse(process.argv);

export default program;
