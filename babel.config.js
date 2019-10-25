module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: ['.js', '.ts', '.tsx', '.json', '.jsx'],
        alias: {
          app: './app',
        },
      },
    ],
  ],
};
