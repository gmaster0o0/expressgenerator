const { generateBasicSkeleton } = require('./generators/basicGenerators');
const { generateBasicRouter } = require('./generators/routerGenerators');
const { generateBasicModel } = require('./generators/modelGenerator');
const { generateBasicController, addControllerToRouter } = require('./generators/controllerGenerators');

const generateBasicServer = async () => {
  await generateBasicSkeleton();
  await generateBasicRouter('Dummy');
  await generateBasicController('Dummy');
  await addControllerToRouter('Dummy');
  await generateBasicModel('Dummy');
};

generateBasicServer().catch((error) => console.error(error));
