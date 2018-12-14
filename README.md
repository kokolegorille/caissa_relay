# Caissa client w/ Relay modern

## Installation des dépendances

$ yarn add babel-polyfill prop-types react react-dom

$ yarn add @babel-core babel-eslint babel-loader @babel-preset-env @babel-preset-react css-loader eslint eslint-config-google file-loader html-webpack-plugin mini-css-extract-plugin node-sass optimize-css-assets-webpack-plugin sass-loader style-loader uglifyjs-webpack-plugin url-loader webpack webpack-cli webpack-dev-server --dev


https://babeljs.io/docs/en/babel-preset-stage-0

Using babel 8 removes stages and change webpack config!!

## Generate schema.json

From the root folder of the graphQl Phoenix server...

$ mix absinthe.schema.json --schema Caissa.Schema --pretty true ../../_REACT/caissa_relay/data/schema.json

Adapt path accordingly.

## Babel 8 brings some pain...

Replace stage-x with other babel plugins
https://babeljs.io/blog/2018/07/27/removing-babels-stage-presets

To get class properties working...

add "@babel/plugin-proposal-class-properties": "^7.2.1",

.babelrc

{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "relay",
    [
      "@babel/plugin-proposal-class-properties"
    ],
  ]
}

webpack.config.js

        options: {
          // Babel 8 removed stage-x!
          // presets: ['env', 'react', 'stage-0'],
          presets: [
            '@babel/preset-env', '@babel/react',
            {
              plugins: [
                '@babel/plugin-proposal-class-properties'
              ]
            },
          ],
        },