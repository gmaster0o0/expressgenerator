const { generateBasicSkeleton } = require('./generators/basicGenerators');
const { generateBasicRouter } = require('./generators/routerGenerators');
const { generateBasicController } = require('./generators/controllerGenerators');

generateBasicSkeleton();

generateBasicRouter('test').catch((error) => console.error(error));
generateBasicController('test').catch((error) => console.error(error));
