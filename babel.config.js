module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@components': './src/components',
          '@configs': './src/configs',
          '@constants': './src/constants',
          '@screens': './src/screens',
          '@navigations': './src/navigations',
          '@utils': './src/utils',
          '@stores': './src/stores',
          '@assets': './src/assets',
          '@themes': './src/themes',
          '@services': './src/services',
          '@translations': './src/translations',
          '@app': './App',
        },
      },
    ],
  ],
}
