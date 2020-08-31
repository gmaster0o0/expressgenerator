const { CodeGenerator } = require('./generators/codeGenerator');

const config = require('./config/styles');

const generateBasicServer = async (name, output = './output') => {
  const codeGenerator = CodeGenerator(name, config.basicStyle, output);
  await codeGenerator.generateServerFromTemplate('User');
};

const generateComponentStyleServer = async (name, output = './output') => {
  const codeGenerator = CodeGenerator(name, config.componentStyle, output);
  await codeGenerator.generateServerFromTemplate('User');
};

const generateComponent = async (name, output = './output', skipTest = false) => {
  const codeGenerator = CodeGenerator(name, config.componentStyle, output);
  await codeGenerator.generateComponent(name, skipTest);
};

module.exports = { generateComponentStyleServer, generateBasicServer, generateComponent };
