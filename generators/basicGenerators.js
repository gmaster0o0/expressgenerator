const ncp = require('ncp');
const colors = require('colors');
const util = require('util');

const generateBasicSkeleton = async (output = './output') => {
  try {
    await util.promisify(ncp)('./templates/server', output);
    console.log(`${colors.green('GENERATE ')} Basic skeleton`);
  } catch (error) {
    console.log(`${colors.red('ERROR ')} ${error}`);
  }
};

module.exports = { generateBasicSkeleton };
