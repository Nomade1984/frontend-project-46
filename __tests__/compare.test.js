import compare from '../src/compare.js';

import fs from 'fs';

import path from 'path';

import { fileURLToPath } from 'url';

import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/*const str1 = `{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}`;

test('compare', () => {
  expect(compare(address1, address2)).toEqual(str1);
});*/

/*const address1 = path.join(__dirname, '__fixtures__/file1.json');
const address2 = path.join(__dirname, '__fixtures__/file2.json');

const str1 = path.join(__dirname, '__fixtures__/testResult.txt');

test('compare', () => {
  expect(compare(address1, address2)).toEqual(
    fs.readFileSync(str1, 'utf-8', function (error, data) {
      return data;
    })
  );
});*/

const address3 = path.join(__dirname, '__fixtures__/file3.json');

const address4 = path.join(__dirname, '__fixtures__/file4.json');

const str3 = path.join(__dirname, '__fixtures__/testResult.json');

const str2 = `{\n  - price: 150\n  + price: 250\n  - producer: China\n  + producer: Germany\n  - quality: reasonable\n  - recommendation: false\n  + recommendation: true\n}`;

test('compare', () => {
  expect(compare(address3, address4)).toEqual(str2);
});

/*test('compare', () => {
  expect(compare(address3, address4)).toEqual(
    fs.readFileSync(str3, 'utf-8', function (error, data) {
      return data;
    })
  );
});*/
