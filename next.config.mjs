import fs from "fs";

// Node v24 on Windows returns EISDIR when readlink is called on a regular file.
// Older Node versions returned EINVAL. Webpack/enhanced-resolve only handles EINVAL,
// so we patch readlink to normalise the error code.
const _readlink = fs.readlink.bind(fs);
fs.readlink = function (path, options, callback) {
  if (typeof options === "function") { callback = options; options = {}; }
  _readlink(path, options, (err, link) => {
    if (err?.code === "EISDIR") {
      callback(Object.assign(new Error(`EINVAL: invalid argument, readlink '${path}'`), { code: "EINVAL", syscall: "readlink", path }));
    } else {
      callback(err, link);
    }
  });
};

const _readlinkSync = fs.readlinkSync.bind(fs);
fs.readlinkSync = function (path, options) {
  try {
    return _readlinkSync(path, options);
  } catch (err) {
    if (err?.code === "EISDIR") {
      throw Object.assign(new Error(`EINVAL: invalid argument, readlink '${path}'`), { code: "EINVAL", syscall: "readlink", path });
    }
    throw err;
  }
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.symlinks = false;
    config.cache = false;
    return config;
  },
};

export default nextConfig;
