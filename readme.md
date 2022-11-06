# Webpack 5 Template

Сборка выполнена на основании [этой статьи ](https://www.robinwieruch.de/webpack-advanced-setup-tutorial/)

## 1. Init project

[Инструкция.](https://www.robinwieruch.de/javascript-project-setup-tutorial/)

```
npm init -y
mkdir src
cd src
touch index.js
```

```
touch .gitignore
```

[.gitignore от Нетологии](https://github.com/netology-code/ahj-code/blob/master/env/.gitignore)

## 2. Webpack 5 - Setup Tutorial

[Инструкция.](https://www.robinwieruch.de/webpack-setup-tutorial/)

```
npm install -D webpack webpack-dev-server webpack-cli
```

```
npm install -D html-webpack-plugin
```

```
npm install -D clean-webpack-plugin
```

```
npm install -D @babel/core @babel/preset-env
```

```
npm install -D babel-loader
```

```
touch webpack.config.js
```

```
touch .babelrc
```

`webpack.config.js`

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hello Webpack bundled JavaScript Project',
      template: path.resolve(__dirname, './src/index.html'),
    }),
  ],
};
```

`.babelrc`

```js
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

Create `src/index.html`

```js
<!DOCTYPE html>
<html>
  <head>
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <div>
      <h1><%= htmlWebpackPlugin.options.title %></h1>

      <div id="app">
    </div>
  </body>
</html>
```

## 3. ESlint - Setup Tutorial

[Инструкция.](https://www.robinwieruch.de/webpack-eslint/)

```
npm install --save-dev eslint-webpack-plugin
```

```
npm install --save-dev @babel/eslint-parser
```

```
npx install-peerdeps --dev eslint-config-airbnb
```

```
touch .eslintrc
```

```
touch .eslintignore
```

`webpack.config.js `

```js

...
const ESLintPlugin = require('eslint-webpack-plugin'); // +

module.exports = {
  ...
  plugins: [new ESLintPlugin()], // +
  ...
};
```

`.eslintrc`

```js
{
  "parser": "@babel/eslint-parser",
  "extends": ["airbnb"]
}
```

`.eslintignore`

```js
dist
coverage
doc
webpack.*.js
```

### ESlint Autofixible

`Command + Shift + P` -> `Open user setting (JSON)`

```js
...
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  }
...
```

## JEST

```
npm install --save-dev jest babel-jest
```