const basicStyle = {
  modelPath: '$output/app/models',
  controllerPath: '$output/app/controllers',
  routerPath: '$output/app/router',
  modelNameStyle: '$model.model.js',
  controllerNameStyle: '$controller.controller.js',
  routerNameStyle: '$router.router.js',
  testPath: '$output/app/test',
  testNameStyle: '$test.spec.js',
};

const componentStyle = {
  modelPath: '$output/app/$component',
  controllerPath: '$output/app/$component',
  routerPath: '$output/app/$component',
  testPath: '$output/app/$component',
  modelNameStyle: '$model.model.js',
  controllerNameStyle: '$controller.controller.js',
  routerNameStyle: '$router.router.js',
  testNameStyle: '$test.spec.js',
};

module.exports = { basicStyle, componentStyle };
