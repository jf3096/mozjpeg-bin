# mozjpeg-bin [![Build Status](https://travis-ci.org/imagemin/mozjpeg-bin.svg?branch=master)](http://travis-ci.org/imagemin/mozjpeg-bin)

> [mozjpeg](https://github.com/mozilla/mozjpeg) is a production-quality JPEG encoder that improves compression while maintaining compatibility with the vast majority of deployed decoders

You probably want [`imagemin-mozjpeg`](https://github.com/imagemin/imagemin-mozjpeg) instead.


## patch

In order to prevent downloading difficultly in China area, I decided to change the code and push 
bin files to npm so as to use it directly.

## Install

```
$ npm install --save mozjpeg
```


## Usage

```js
const {execFile} = require('child_process');
const mozjpeg = require('mozjpeg');

execFile(mozjpeg, ['-outfile', 'output.jpg', 'input.jpg'], err => {
	console.log('Image minified!');
});
```


## CLI

```
$ npm install --global mozjpeg
```

```
$ mozjpeg --help
```


## License

MIT © [Imagemin](https://github.com/imagemin)
