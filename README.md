# binary-code-loader
build file to base64，transform base64 file to Uint8Array.buffer in runtime

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
