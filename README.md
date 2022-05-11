# binary-code-loader
transform file to Uint8Array.buffer

## install
```js
npm install binary-code-loader --save-dev
```

## usage
webpack.config.js
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.wasm$/,
        use: [
          {
            loader: 'binary-code-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
};
```

## Options


|             Name              |            Type             |                            Default                            | Description                                                                         |
| :---------------------------: | :-------------------------: | :-----------------------------------------------------------: | :---------------------------------------------------------------------------------- |
|     **[`limit`](#limit)**     | Boolean, Number, String |                            true                             | Specifying the maximum size of a file in bytes.                                     |
