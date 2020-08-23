const { generateBasicSkeleton } = require('./generators/basicGenerators');
const { generateBasicRouter } = require('./generators/routerGenerators');
const { generateBasicModel } = require('./generators/modelGenerator');
const { generateBasicController, addControllerToRouter } = require('./generators/controllerGenerators');

const generateBasicServer = async () => {
  await generateBasicSkeleton();
  await generateBasicRouter('Test');
  await generateBasicController('Test');
  await addControllerToRouter('Test');
  await generateBasicModel('Test');
};

generateBasicServer().catch((error) => console.error(error));
