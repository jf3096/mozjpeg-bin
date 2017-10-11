const path = require('path');
const BinWrapper = require('bin-wrapper');
const localDestBin = require('./local-dest-bin');

localDestBin();

module.exports = new BinWrapper()
	.dest(path.join(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'cjpeg.exe' : 'cjpeg');
