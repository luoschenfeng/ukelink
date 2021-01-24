const et = require('element-themex')

et.run({
  config: './src/styles/theme/element-variables.scss',
  out: './src/assets/theme/blue',
  minimize: true,
})

// et.run({
//   config: './src/styles/green-element-variables.scss',
//   out: './src/assets/theme/green',
//   minimize: true,
// })
