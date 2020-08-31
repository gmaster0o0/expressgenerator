const ncp = require('ncp');
const colors = require('colors');
const util = require('util');
const fs = require('fs');
const path = require('path');
const { replaceTemplateVariable } = require('../utils/generatorUtils');
const { templateDir } = require('../config/appConfig');

const copyTemplate = async (output = './output') => {
  try {
    await util.promisify(ncp)(path.resolve(templateDir, 'server'), output);
    console.log(`${colors.green('CLONE ')} Basic skeleton`);
  } catch (error) {
    console.log(`${colors.red('ERROR ')} ${error}`);
  }
};

const changeAppicationName = async (name, output) => {
  const dest = `${output}/package.json`;
  let result = await fs.promises.readFile(dest, 'utf8');
  result = replaceTemplateVariable(result, 'NAME', name);

  await fs.promises.writeFile(dest, result);
  console.log(`${colors.green('UPDATE ')} ${dest}`);
};
const generateBasicSkeleton = async (name, output = './output') => {
  await copyTemplate(output);
  await changeAppicationName(name, output);
};

module.exports = { generateBasicSkeleton };
