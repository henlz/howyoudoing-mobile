module: {
  loaders: [
    {
      test: /\.json$/,
      exclude: /node_modules[\\\/]/,
      loader: 'json'
    },
    {
      test: /\.ts$/,
      exclude: /node_modules[\\\/]/,
      loader: 'awesome-typescript'
    }
  ]
}
