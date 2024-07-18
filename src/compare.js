import fs from 'fs';

const compare = (address) => {
  fs.readFile(address, 'utf8', function (error, data) {
    console.log(data);
  });
};

export default compare;
