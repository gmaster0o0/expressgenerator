#!/usr/bin/env node
const { Command } = require('commander');

const program = new Command();

const packageInfo = require('./package.json');
const app = require('./index');

program.version(packageInfo.version);

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
  .command('basic <name> [output]')
  .alias('b')
  .description('Generate basic style server')
  .action((name, output = process.cwd()) =>
    app.generateBasicServer(name, output).catch((error) => console.error(error))
  );
server
  .command('component [output]')
  .description('Generate component style server')
  .alias('c')
  .action((name, output = process.cwd()) =>
    app.generateComponentStyleServer(name, output).catch((error) => console.error(error))
  );

const compoment = program.command('component <name> [output]');
compoment.alias('cmp');
compoment.description('Generate component to the output directory');
compoment.action((name, output = process.cwd(), options) => {
  app.generateComponent(name, output, options.notest).catch((error) => console.error(error));
});
compoment.option('--notest', 'Skip generating test', false);

program.parse(process.argv);
