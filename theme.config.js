const et = require('element-themex')

et.run({
  config: './src/styles/archives/blue-element-variables.scss',
  out: './src/assets/theme/style/blue',
  minimize: true,
})

// et.run({
//   config: './src/styles/green-element-variables.scss',
//   out: './src/assets/theme/green',
//   minimize: true,
// })
