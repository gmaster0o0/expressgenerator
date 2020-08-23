const fs = require('fs');
const colors = require('colors');

const { createDestinationIfNotExist } = require('../utils/generatorUtils');

const generateBasicRouter = async (name, output = './output/app/routers') => {
  try {
    const dest = createDestinationIfNotExist(output, name, 'router');

    const regex = /<.+>/gi;
    let result = await fs.promises.readFile('./templates/routers/basic.js', 'utf8');
    result = result.replace(regex, name);

    await fs.promises.writeFile(dest, result);
    console.log(`${colors.green('GENERATE ')} ${output}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { generateBasicRouter };
