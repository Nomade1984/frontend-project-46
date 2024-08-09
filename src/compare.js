import fs from 'fs';

import _ from 'lodash';

const compare = (address1, address2) => {
  const result1 = fs.readFileSync(address1, 'utf8', function (error, data) {
    return data;
  });

  const result2 = fs.readFileSync(address2, 'utf8', function (error, data) {
    return data;
  });

  const obj1 = JSON.parse(result1);
  const arrKey1 = Object.keys(obj1);

  const obj2 = JSON.parse(result2);
  const arrKey2 = Object.keys(obj2);

  const arrDiff1 = _.difference(arrKey1, arrKey2);
  const arrDiff2 = _.difference(arrKey2, arrKey1);
  const arrFinal = [];

  for (let i = 0; i < arrDiff1.length; i += 1) {
    if (arrKey1.includes(arrDiff1[i])) {
      const smallArr = [arrDiff1[i], obj1[arrDiff1[i]]];
      arrFinal.push(smallArr);
    }
  }

  for (let i = 0; i < arrDiff2.length; i += 1) {
    if (arrKey2.includes(arrDiff2[i])) {
      const smallArr = [arrDiff2[i], obj2[arrDiff2[i]]];
      arrFinal.push(smallArr);
    }
  }

  const arrInter = _.intersection(arrKey1, arrKey2);

  for (let i = 0; i < arrInter.length; i += 1) {
    if (obj1[arrInter[i]] === obj2[arrInter[i]]) {
      const smallArr = [arrInter[i], obj1[arrInter[i]]];
      arrFinal.push(smallArr);
    } else {
      const smallArr1 = [arrInter[i], obj1[arrInter[i]]];
      arrFinal.push(smallArr1);
      const smallArr2 = [arrInter[i], obj2[arrInter[i]]];
      arrFinal.push(smallArr2);
    }
  }

  const sortedArr = arrFinal.sort();

  for (let i = 0; i < sortedArr.length; i += 1) {
    if (sortedArr[i][1] === obj1[sortedArr[i][0]] && sortedArr[i][1] === obj2[sortedArr[i][0]]) {
      sortedArr[i][0] = `  ${sortedArr[i][0]}`;
    } else if (arrDiff1.includes(sortedArr[i][0])) {
      sortedArr[i][0] = `- ${sortedArr[i][0]}`;
    } else if (arrDiff2.includes(sortedArr[i][0])) {
      sortedArr[i][0] = `+ ${sortedArr[i][0]}`;
    }
  }

  for (let i = 1; i < sortedArr.length; i += 1) {
    if (sortedArr[i - 1][0] === sortedArr[i][0]) {
      sortedArr[i - 1][1] = obj1[sortedArr[i - 1][0]];

      sortedArr[i - 1][0] = `- ${sortedArr[i - 1][0]}`;

      sortedArr[i][1] = obj2[sortedArr[i][0]];

      sortedArr[i][0] = `+ ${sortedArr[i][0]}`;
    }
  }

  const trick = ['{'];
  for (let i = 0; i < sortedArr.length; i += 1) {
    const str = `  ${sortedArr[i][0]}: ${sortedArr[i][1]}`;
    trick.push(str);
  }
  trick.push('}');
  const finalResult = trick.join('\n');
  return finalResult;
  //console.log(finalResult);
};

export default compare;
