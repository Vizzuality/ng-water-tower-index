const path = require('path');

module.exports = {
  webpack: function(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          'three-globe': path.join(__dirname, 'src', 'components', 'globe', 'custom-three-globe.js')
        }
      }
    };
  }
};
