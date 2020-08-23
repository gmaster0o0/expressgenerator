const fs = require('fs');
const mkdirp = require('mkdirp');

const { resolveConfig, resolvePath } = require('./configUtils');

const replaceTemplateVariable = (str, tempVar, value) => {
  const regex = new RegExp(`<${tempVar}>`, 'gi');
  return str.replace(regex, value);
};

const createDestinationIfNotExist = (output) => {
  if (!fs.existsSync(output)) {
    mkdirp.sync(output);
  }
};

const getFilePath = (config, field, value) => resolveConfig(config, 'output', value)[`${field}Path`];
const getDestination = (config, output, name, field) => {
  const path = resolvePath(getFilePath(config, field, output), name, field);
  createDestinationIfNotExist(path, name, field);
  const fileName = resolveConfig(config, field, name.toLowerCase())[`${field}NameStyle`];
  return `${path}/${fileName}`;
};

module.exports = { replaceTemplateVariable, createDestinationIfNotExist, getDestination, getFilePath };
