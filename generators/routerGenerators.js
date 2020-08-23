const fs = require('fs');
const colors = require('colors');

const { getDestination } = require('../utils/generatorUtils');

const generateBasicRouter = async (name, output, config) => {
  try {
    const dest = getDestination(config, output, name, 'router');

    const regex = /<.+>/gi;
    let result = await fs.promises.readFile('./templates/routers/basic.js', 'utf8');
    result = result.replace(regex, name);

    await fs.promises.writeFile(dest, result);
    console.log(`${colors.green('GENERATE ')} ${dest}`);
  } catch (error) {
    console.log(`${colors.red('FAILED')}  ROUTER:${name}`);
    console.log(error);
  }
};

const RouterGenerator = (config, output = './output') => {
  const generateRouter = async (name) => await generateBasicRouter(name, output, config);

  return {
    generateRouter,
  };
};
module.exports = { RouterGenerator };
