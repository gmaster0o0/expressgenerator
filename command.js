const { Command } = require('commander');

const program = new Command();

const packageInfo = require('./package.json');
const api = require('./api');

program.version(packageInfo.version);

console.log(process.cwd());

const controller = program.command('controller <name> [output]');
controller.description('Generate controller to the output directory');
controller.alias('c');

const model = program.command('model <name> [output]');
model.description('Generate model to the output directory');
model.alias('m');

const router = program.command('router <name> [output]');
router.description('Generate router to the output directory');
router.alias('r');

const server = program.command('server');
server.description('Generate server to the output directory');
server.alias('s');
server
  .command('basic [output]')
  .alias('b')
  .description('Generate basic style server')
  .action((output = process.cwd()) => api.generateBasicServer(output).catch((error) => console.error(error)));
server
  .command('component [output]')
  .description('Generate component style server')
  .alias('c')
  .action((output = process.cwd()) => api.generateComponentStyleServer(output).catch((error) => console.error(error)));

const compoment = program.command('component <name> [output]');
compoment.alias('cmp');
compoment.description('Generate component to the output directory');
compoment.action((name, output = process.cwd(), options) => {
  api.generateComponent(name, output, options.notest).catch((error) => console.error(error));
});
compoment.option('--notest', 'Skip generating test', false);

program.parse(process.argv);
