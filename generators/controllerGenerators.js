const fs = require('fs');
const colors = require('colors');
const readline = require('readline');

const { replaceTemplateVariable, createDestinationIfNotExist } = require('../utils/generatorUtils');

const generateBasicController = async (name, output = './output/app/controllers') => {
  try {
    const dest = createDestinationIfNotExist(output, name, 'controller');

    let result = await fs.promises.readFile('./templates/controllers/basic.js', 'utf8');
    result = replaceTemplateVariable(result, 'MODELNAME', name);
    result = replaceTemplateVariable(result, 'FACTORYPATH', './controller.factory');
    result = replaceTemplateVariable(result, 'MODELPATH', `../models/${name.toLowerCase()}.model`);

    await fs.promises.writeFile(dest, result);
    console.log(`${colors.green('GENERATE ')} ${output}`);
  } catch (error) {
    console.log(error);
  }
};

const writeLinesToFile = (lines, file) => {
  const fileStream = fs.createWriteStream(file);

  fileStream.on('error', function (error) {
    console.log(error);
  });

  lines.forEach(function (line) {
    fileStream.write(`${line}\n`);
  });
  fileStream.end();
};
const addControllerToRouter = async (name) => {
  try {
    const lines = [];
    const routerFile = `./output/app/routers/${name.toLowerCase()}.router.js`;
    const lineReader = readline.createInterface({
      input: fs.createReadStream(routerFile),
    });

    // eslint-disable-next-line no-restricted-syntax
    for await (const line of lineReader) {
      lines.push(line);
      if (line === 'const router = express.Router();') {
        lines.push('');
        lines.push(
          `const ${name.toLowerCase()}Controller = require('../controllers/${name.toLowerCase()}.controller');`
        );
      }
    }

    writeLinesToFile(lines, routerFile);
    console.log(`${colors.green('UPDATE   ')} ${routerFile} `);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { generateBasicController, addControllerToRouter };
