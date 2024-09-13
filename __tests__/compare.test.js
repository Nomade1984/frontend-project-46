import compare from '../src/compare.js';

//import path from 'path';

//const address1 = '../files/file1.json';

//const address2 = '../files/file2.json';

const address1 = 'files/file1.json';

const address2 = 'files/file2.json';

const str1 = `{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}`;

test('compare', () => {
  expect(compare(address1, address2)).toEqual(str1);
});

const address3 = '__tests__/__fixtures__/file3.json';

const address4 = '__tests__/__fixtures__/file4.json';

const str2 = `{\n  - price: 150\n  + price: 250\n  - producer: China\n  + producer: Germany\n  - quality: reasonable\n  - recommendation: false\n  + recommendation: true\n}`;

test('compare', () => {
  expect(compare(address3, address4)).toEqual(str2);
});
