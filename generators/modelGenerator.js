const fs = require('fs');
const colors = require('colors');

const { replaceTemplateVariable, createDestinationIfNotExist } = require('../utils/generatorUtils');

const mongooseTemplate = require('../templates/models/mongoose');

const getTemplate = (type) => {
  if (type === 'mongoose') {
    return mongooseTemplate.template;
  }
};

const generateBasicModel = async (
  name,
  output = './output/app/models',
  databaseType = 'mongoose',
  timestamp = true
) => {
  try {
    const dest = createDestinationIfNotExist(output, name, 'model');

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
    console.log(`${colors.green('GENERATE ')} ${output}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { generateBasicModel };
