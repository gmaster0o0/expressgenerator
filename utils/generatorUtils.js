const fs = require('fs');

const { resolveConfig } = require('./configUtils');

const replaceTemplateVariable = (str, tempVar, value) => {
  const regex = new RegExp(`<${tempVar}>`, 'gi');
  return str.replace(regex, value);
};

const createDestinationIfNotExist = (output) => {
  if (!fs.existsSync(output)) {
    fs.mkdirSync(output);
  }
};

const getFilePath = (config, field, value) => resolveConfig(config, 'output', value)[`${field}Path`];
const getDestination = (config, output, name, field) => {
  const path = getFilePath(config, field, output);
  createDestinationIfNotExist(path, name, field);
  const fileName = resolveConfig(config, field, name.toLowerCase())[`${field}NameStyle`];
  return `${path}/${fileName}`;
};

module.exports = { replaceTemplateVariable, createDestinationIfNotExist, getDestination, getFilePath };
