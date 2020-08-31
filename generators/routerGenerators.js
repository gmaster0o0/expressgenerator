const fs = require('fs');
const colors = require('colors');
const path = require('path');
const { templateDir } = require('../config/appConfig');
const { getDestination, replaceTemplateVariable } = require('../utils/generatorUtils');

const generateBasicRouter = async (name, output, config) => {
  try {
    const dest = getDestination(config, output, name, 'router');

    let result = await fs.promises.readFile(path.resolve(templateDir, 'routers', 'basic.js'), 'utf8');
    result = replaceTemplateVariable(result, 'NAME', name);

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
