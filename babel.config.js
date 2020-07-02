module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv',
  ],
  plugins: [
    [
      'babel-plugin-dotenv',
      {
        replacedModuleName: 'babel-dotenv',
      },
    ],
  ],
};
