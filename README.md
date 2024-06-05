# react-code
npm init -y
npm install react react-dom

npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader

.babelrc 
    {
      "presets": ["@babel/preset-env", "@babel/preset-react"]
    }

package.json
    "scripts": {
      "start": "webpack serve --mode development",
      "build": "webpack --mode production"
    }

implemented - webpack.config.js

