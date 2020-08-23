const resolveConfig = (config, field, value) => {
  Object.keys(config).forEach((key) => {
    config[key] = config[key].replace(new RegExp(`\\$${field}`), value);
  });

  return config;
};

const resolvePath = (path, name, field) => path.replace(new RegExp(`\\$${field}`), name);
module.exports = { resolveConfig, resolvePath };
