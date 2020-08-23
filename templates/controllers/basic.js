const <MODELNAME> = require('<MODELPATH>');
const factory = require('<FACTORYPATH>');

exports.get<MODELNAME> = factory.getOne(<MODELNAME>);
exports.delete<MODELNAME> = factory.deleteOne(<MODELNAME>);
exports.list<MODELNAME>s = factory.getAll(<MODELNAME>);
exports.create<MODELNAME> = factory.getOne(<MODELNAME>);
exports.update<MODELNAME> = factory.updateOne(<MODELNAME>);