const webpack = require('webpack')
const path = require('path')
const { environment } = require('@rails/webpacker')

const vue =  require('./loaders/vue')
environment.loaders.append('vue', vue)

// environment.plugins.append('CommonsChunkPlugin', new webpack.optimize.CommonsChunkPlugin({
//   name: 'application',
//   chunks: ['application', 'communication', 'insights/companies', 'insights/workflows'],
//   minChunks(module) {
//     return module.context && module.context.indexOf('node_modules') >= 0
//   }
// }))
 
environment.loaders.prepend('slim', {
  test: /\.slim$/,
  use: [
    {
      loader: 'vue-template-compiler-loader'
    },
    {
      loader: 'slim-lang-loader',
      options: {
        slimOptions: {
          disable_escape: true
        }
      }
    }
  ]
})
 
environment.loaders.append('coffee', {
  test: /\.coffee$/,
  use: [
    {
      loader: 'coffee-loader',
      options: {
        transpile: {
          presets: ['env']
        }
      }
    }
  ]
})
 
// environment.loaders.append("expose-jquery", {
//   test: require.resolve("jquery"),
//   use: [{
//     loader: 'expose-loader',
//     options: "jQuery"
//   }, {
//     loader: 'expose-loader',
//     options: "$"
//   }]
// })
 
// const exposeModules = {
//   react: "React",
//   "react-dom": "ReactDOM",
//   "react-table": "ReactTable",
//   "react-debounce-input": "DebounceInput",
//   "classnames": "classNames",
//   "i18n-js": "I18n",
//   "dropzone": "Dropzone",
// }
 
// Object.keys(exposeModules).forEach((module) => {
//   environment.loaders.append(`expose-${module}`, {
//     test: require.resolve(module),
//     use: [{
//       loader: 'expose-loader',
//       options: exposeModules[module]
//     }]
//   })
// })
 
environment.context = path.normalize(__dirname + "/../../app")
 
module.exports = environment