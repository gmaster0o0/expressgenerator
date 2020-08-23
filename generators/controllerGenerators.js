const fs = require('fs');
const colors = require('colors');

const replaceTemplateVariable = (str, tempVar, value) => {
  const regex = new RegExp(`<${tempVar}>`);
  return str.replace(regex, value);
};

const generateBasicController = async (name, output = './output/app/controllers') => {
  try {
    const dest = `${output}/${name}.controller.js`;
    if (!fs.existsSync(output)) {
      fs.mkdirSync(output);
    }

    let result = await fs.promises.readFile('./templates/controllers/basic.js', 'utf8');
    result = replaceTemplateVariable(result, 'MODELNAME', name);
    result = replaceTemplateVariable(result, 'FACTORYPATH', './controller.factory');
    result = replaceTemplateVariable(result, 'MODELPATH', `../models/${name}.model`);

    await fs.promises.writeFile(dest, result);
    console.log(`${colors.green('GENERATE ')} ${name} controller`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { generateBasicController };
