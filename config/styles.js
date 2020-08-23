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
  modelPath: '$output/app/$model',
  controllerPath: '$output/app/$controller',
  routerPath: '$output/app/$router',
  testPath: '$output/app/$test',
  modelNameStyle: '$model.model.js',
  controllerNameStyle: '$controller.controller.js',
  routerNameStyle: '$router.router.js',
  testNameStyle: '$test.spec.js',
};

module.exports = { basicStyle, componentStyle };
