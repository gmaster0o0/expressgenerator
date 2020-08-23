const fs = require('fs');
const colors = require('colors');

const { replaceTemplateVariable, getDestination } = require('../utils/generatorUtils');
const mongooseTemplate = require('../templates/models/mongoose');

const getTemplate = (type) => {
  if (type === 'mongoose') {
    return mongooseTemplate.template;
  }
};

const generateBasicModel = async (name, output, config, databaseType, timestamp) => {
  try {
    const dest = getDestination(config, output, name, 'model');

    const template = getTemplate(databaseType);

    let lines = [];
    lines = lines.concat(template.dependency);
    lines = lines.concat(template.schemaDeclaration);
    if (timestamp) {
      template.schemaBody = `${template.schemaBody}, ${template.timestamp}`;
    }
    lines = lines.concat(template.exports);

    let content = lines.join('\n');
    content = replaceTemplateVariable(content, 'SCHEMA', `${name.toLowerCase()}Schema`);
    content = replaceTemplateVariable(content, 'MODEL', name);
    content = replaceTemplateVariable(content, 'BODY', template.schemaBody);

    await fs.promises.writeFile(dest, content);
    console.log(`${colors.green('GENERATE ')} ${dest}`);
  } catch (error) {
    console.log(error);
  }
};

const ModelGenerator = (config, output = './output') => {
  const generateModel = async (name, databaseType = 'mongoose', timestamp = true) =>
    await generateBasicModel(name, output, config, databaseType, timestamp);

  return {
    generateModel,
  };
};

module.exports = { ModelGenerator };
