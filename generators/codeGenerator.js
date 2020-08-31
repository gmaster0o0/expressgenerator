const { generateBasicSkeleton } = require('./basicGenerators');
const { RouterGenerator } = require('./routerGenerators');
const { ModelGenerator } = require('./modelGenerator');
const { ControllerGenerator } = require('./controllerGenerators');
const { TestGenerator } = require('./testGenerator');

const { createDestinationIfNotExist } = require('../utils/generatorUtils');

/**
 * CodeGenerator factory function
 * @param {} config
 * @param {*} output
 */
const CodeGenerator = (name, config, output = './output') => {
  output = `${output}/${name}`;

  createDestinationIfNotExist(output);
  const routerGenerator = RouterGenerator(config, output);
  const modelGenerator = ModelGenerator(config, output);
  const controllerGenerator = ControllerGenerator(config, output);
  const testGenerator = TestGenerator(config, output);

  const generateComponent = async (componentName, skipTest = false) => {
    await routerGenerator.generateRouter(componentName);
    await controllerGenerator.generateController(componentName);
    await controllerGenerator.addControllerToRouter(componentName);
    await modelGenerator.generateModel(componentName);
    if (!skipTest) {
      await testGenerator.generateTest(componentName);
    }
  };

  const generateServerFromTemplate = async (defaultResource = 'User') => {
    await generateBasicSkeleton(name, output);
    await routerGenerator.generateRouter(defaultResource);
    await controllerGenerator.generateController(defaultResource);
    await controllerGenerator.addControllerToRouter(defaultResource);
    await modelGenerator.generateModel(defaultResource);
  };

  return {
    generateComponent,
    generateServerFromTemplate,
  };
};

module.exports = { CodeGenerator };
