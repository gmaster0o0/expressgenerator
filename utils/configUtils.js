const resolveConfig = (config, field, value) => {
  Object.keys(config).forEach((key) => {
    config[key] = config[key].replace(new RegExp(`\\$${field}`), value);
  });

  return config;
};

module.exports = { resolveConfig };
