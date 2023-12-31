module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: [
          'react-native-paper/babel',
          ['module-resolver',
          {
            root: ['./src'],
            alias: {
              '@': './src',
            },
            extensions: ['.js', '.json', '.tsx', '.ts'],
          },]
        ],
      },
    },
  };
};
