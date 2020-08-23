const fs = require('fs');
const colors = require('colors');

const generateBasicRouter = async (name, output = './output/app/routers') => {
  try {
    const dest = `${output}/${name}.router.js`;
    if (!fs.existsSync(output)) {
      fs.mkdirSync(output);
    }
    const regex = /<.+>/gi;

    let result = await fs.promises.readFile('./templates/routers/basic.js', 'utf8');
    result = result.replace(regex, name);

    await fs.promises.writeFile(dest, result);
    console.log(`${colors.green('GENERATE ')} ${name} router`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { generateBasicRouter };
