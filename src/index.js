let loaderUtils = require('loader-utils');

function shouldTransform(limit, size) {
  if (typeof limit === 'boolean') {
    return limit;
  }
  if (typeof limit === 'string') {
    return size <= parseInt(limit, 10);
  }
  if (typeof limit === 'number') {
    return size <= limit;
  }
  return true;
}

function transform (data) {
  const isBrowser = typeof window !== 'undefined' && typeof window.atob === 'function';
  const base64 = isBrowser ? window.atob(data) : Buffer.from(data, 'base64').toString('binary')
  const bytes = new Uint8Array(base64.length);

  for (let i = 0; i < base64.length; i++) {
    bytes[i] = base64.charCodeAt(i)
  }
  return bytes.buffer;
}

module.exports = function (content) {
  if (this.cacheable) {
    this.cacheable()
  }

  const options = loaderUtils.getOptions(this) || {};

  if (shouldTransform(options.limit, content.length)) {
    return `module.exports = ${transform}('${content.toString('base64')}')`;
  }

  let name = loaderUtils.interpolateName(this, "[hash:16].[ext]", { content });
  this.emitFile(name, content);
  return `module.exports = '${name}'`;
};

module.exports.raw = true;
