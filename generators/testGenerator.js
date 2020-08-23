const fs = require('fs');
const colors = require('colors');

const { replaceTemplateVariable, getDestination } = require('../utils/generatorUtils');

const generateBasicTest = async (name, output, config) => {
  try {
    const dest = getDestination(config, output, name, 'test');

    let result = await fs.promises.readFile('./templates/tests/basic.js', 'utf8');
    result = replaceTemplateVariable(result, 'TESTNAME', name);

    await fs.promises.writeFile(dest, result);
    console.log(`${colors.green('GENERATE ')} ${dest}`);
  } catch (error) {
    console.log(`${colors.red('FAILED')}  TEST:${name}`);
    console.log(error);
  }
};

const TestGenerator = (config, output = './output') => {
  const generateTest = async (name) => await generateBasicTest(name, output, config);

  return {
    generateTest,
  };
};
module.exports = { TestGenerator };
