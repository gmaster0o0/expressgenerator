const template = {
  dependency: ["const mongoose = require('mongoose');", ''],
  exports: ["const <MODEL> = mongoose.model('<MODEL>', <SCHEMA>);", '', 'module.exports = <MODEL>;'],
  schemaDeclaration: ['const <SCHEMA> = new mongoose.Schema(<BODY>)'],
  schemaBody: ['{}'],
  timestamp: ['{ timestamps: true }'],
};

module.exports = { template };
