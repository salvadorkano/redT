module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    ['@babel/plugin-transform-class-properties', {loose: true}],
    ['@babel/plugin-transform-private-methods', {loose: true}],
    ['@babel/plugin-transform-private-property-in-object', {loose: true}],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
          colors: './src/assets/colors',
          fonts: './src/assets/fonts',
          icons: './src/assets/icons',
          images: './src/assets/images',
          components: './src/components',
          router: './src/router',
          screens: './src/screens',
          utils: './src/utils',
          styles: './src/styles',
          services: './src/services',
          context: './src/context',
        },
      },
    ],
  ],
};
