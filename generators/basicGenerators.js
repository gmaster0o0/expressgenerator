const ncp = require('ncp');
const colors = require('colors');

const generateBasicSkeleton = (output = './output') => {
  ncp('./templates/server', output, (err) => {
    if (err) {
      return console.log(`${colors.red('ERROR ')}basic skeleton cannot generated`);
    }
    console.log(`${colors.green('GENERATE ')}Basic skeleton`);
  });
};

module.exports = { generateBasicSkeleton };
