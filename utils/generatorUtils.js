const fs = require('fs');

const replaceTemplateVariable = (str, tempVar, value) => {
  const regex = new RegExp(`<${tempVar}>`, 'gi');
  return str.replace(regex, value);
};

const createDestinationIfNotExist = (output, name, component) => {
  const dest = `${output}/${name.toLowerCase()}.${component}.js`;
  if (!fs.existsSync(output)) {
    fs.mkdirSync(output);
  }

  return dest;
};

module.exports = { replaceTemplateVariable, createDestinationIfNotExist };
