const { generateBasicSkeleton } = require('./generators/basicGenerators');
const { RouterGenerator } = require('./generators/routerGenerators');
const { ModelGenerator } = require('./generators/modelGenerator');
const { ControllerGenerator } = require('./generators/controllerGenerators');
const { TestGenerator } = require('./generators/testGenerator');

const { createDestinationIfNotExist } = require('./utils/generatorUtils');

const config = require('./config/styles');

const generateBasicServer = async (output = './output') => {
  createDestinationIfNotExist(output);
  const routerGenerator = RouterGenerator(config.basicStyle, output);
  const modelGenerator = ModelGenerator(config.basicStyle, output);
  const controllerGenerator = ControllerGenerator(config.basicStyle, output);

  await generateBasicSkeleton();
  await routerGenerator.generateRouter('Dummy');
  await controllerGenerator.generateController('Dummy');
  await controllerGenerator.addControllerToRouter('Dummy');
  await modelGenerator.generateModel('Dummy');
};

const generateComponentStyleServer = async (output = './output') => {
  createDestinationIfNotExist(output);
  const routerGenerator = RouterGenerator(config.componentStyle, output);
  const modelGenerator = ModelGenerator(config.componentStyle, output);
  const controllerGenerator = ControllerGenerator(config.componentStyle, output);

  await generateBasicSkeleton();
  await routerGenerator.generateRouter('Dummy');
  await controllerGenerator.generateController('Dummy');
  await controllerGenerator.addControllerToRouter('Dummy');
  await modelGenerator.generateModel('Dummy');
};

const generateComponent = async (name, output = './output', skipTest = false) => {
  createDestinationIfNotExist(output);
  const routerGenerator = RouterGenerator(config.componentStyle, output);
  const modelGenerator = ModelGenerator(config.componentStyle, output);
  const controllerGenerator = ControllerGenerator(config.componentStyle, output);
  const testGenerator = TestGenerator(config.componentStyle, output);

  await routerGenerator.generateRouter(name);
  await controllerGenerator.generateController(name);
  await controllerGenerator.addControllerToRouter(name);
  await modelGenerator.generateModel(name);
  if (!skipTest) {
    await testGenerator.generateTest(name);
  }
};

module.exports = { generateComponentStyleServer, generateBasicServer, generateComponent };
