const fs = require('fs-extra');
const osFilterObj = require('os-filter-obj');
const path = require('path');

module.exports = function () {
	const vendorPath = path.resolve(__dirname, '../vendor');

	const osArr = [
		{
			abs: path.join(vendorPath, 'macos/cjpeg'),
			os: 'darwin'
		},
		{
			abs: path.join(vendorPath, 'linux/cjpeg'),
			os: 'linux'
		},
		{
			abs: path.join(vendorPath, 'win/cjpeg.exe'),
			os: 'win32'
		},
	];

	const results = osFilterObj(osArr);

	if (!results || results.length !== 1) {
		throw new Error('unknown result');
	}

	const result = results[0];
	const filename = path.basename(result.abs);
	const destination = path.join(vendorPath, filename);

	if (!fs.existsSync(destination)) {
		fs.copySync(result.abs, path.join(vendorPath, filename));
	}
};
