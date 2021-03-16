// next.config.js
// require('dotenv').config({ path: `./.env.local.NEXT_APP_WEATHER_API_KEY` });

module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes packages that depend on fs/module module
    if (!isServer) {
      config.node = { fs: 'empty', module: 'empty' };
    }

    return config;
  },
  // env: {
  //   OPEN: NEXT_APP_WEATHER_API_KEY,
  // },
};
