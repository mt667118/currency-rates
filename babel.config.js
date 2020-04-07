module.exports =
  {
    'presets': ['@babel/preset-flow', '@babel/preset-env', '@babel/preset-react'],
    'plugins': [
      ['@babel/plugin-transform-runtime', {
        'corejs': false,
        'helpers': true,
        'regenerator': true,
        'useESModules': false
      }]
    ]
  };