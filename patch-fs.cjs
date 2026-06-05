// Patches Node.js v24 on Windows: readlink on a regular file returns EISDIR,
// but webpack/enhanced-resolve/@vercel/nft only handle EINVAL. Normalise all forms.
const fs = require('fs');

function makeEINVAL(path) {
  const e = new Error(`EINVAL: invalid argument, readlink '${path}'`);
  e.code = 'EINVAL'; e.syscall = 'readlink'; e.path = path;
  return e;
}

// Callback-based fs.readlink
const _readlink = fs.readlink.bind(fs);
fs.readlink = function (path, options, callback) {
  if (typeof options === 'function') { callback = options; options = {}; }
  _readlink(path, options, (err, link) => {
    callback(err && err.code === 'EISDIR' ? makeEINVAL(path) : err, link);
  });
};

// Synchronous fs.readlinkSync
const _readlinkSync = fs.readlinkSync.bind(fs);
fs.readlinkSync = function (path, options) {
  try { return _readlinkSync(path, options); }
  catch (err) {
    if (err && err.code === 'EISDIR') throw makeEINVAL(path);
    throw err;
  }
};

// Promise-based fs.promises.readlink (used by @vercel/nft in collect-build-traces)
const _promisesReadlink = fs.promises.readlink.bind(fs.promises);
fs.promises.readlink = async function (path, options) {
  try { return await _promisesReadlink(path, options); }
  catch (err) {
    if (err && err.code === 'EISDIR') throw makeEINVAL(path);
    throw err;
  }
};
