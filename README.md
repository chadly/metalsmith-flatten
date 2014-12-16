
# metalsmith-flatten

> A metalsmith plugin to flatten a directory hierarchy.

## Installation

    $ npm install metalsmith-flatten --save-dev

## Usage

```js
var Metalsmith = require('metalsmith');
var flatten = require('metalsmith-flatten');

var metalsmith = new Metalsmith(__dirname)
  .use(flatten({
    prefix: 'my-optional-prefix-'
  }));
```

Given an input directory of `src`, this will transform a directory structure that looks like this:

```
src/
	my-dir/
		one.html
		two.html
	my-other-dir/
		three.html
```

to a flat output directory:

```
my-optional-prefix-my-dir-one.html
my-optional-prefix-my-dir-two.html
my-optional-prefix-my-other-dir-three.html
```
