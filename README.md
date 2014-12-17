
# metalsmith-flatten

> A metalsmith plugin to flatten a directory hierarchy.

## Installation

    $ npm install metalsmith-flatten --save-dev

## Usage

### Flatten the Entire Directory

```js
var Metalsmith = require('metalsmith');
var flatten = require('metalsmith-flatten');

var metalsmith = new Metalsmith(__dirname)
  .use(flatten());
```

This will transform a directory structure that looks like this:

```
my-dir/
	one.html
	two.html
	nested/
		three.html
my-other-dir/
	four.html
```

to a flat output directory:

```
my-dir-one.html
my-dir-two.html
my-dir-nested-three.html
my-other-dir-four.html
```

### Flatten a Specific Directory

The `flatten` function takes a string pattern that it will use to determine which directories it should flatten.

```js
var metalsmith = new Metalsmith(__dirname)
  .use(flatten("my-dir"));
```

### Add a Prefix

You can pass a `prefix` option to the flatten function to prefix all the flattened files with a string.

```js
var metalsmith = new Metalsmith(__dirname)
  .use(flatten({
    prefix: 'my-optional-prefix-',
	pattern: "my-dir"
  }));
```

This will transform a directory structure that looks like this:

```
my-dir/
	one.html
	two.html
	nested/
		three.html
my-other-dir/
	four.html
```

to a flat output directory:

```
my-optional-prefix-my-dir-one.html
my-optional-prefix-my-dir-two.html
my-optional-prefix-my-dir-nested-three.html
my-other-dir/
	four.html
```

### Flatten Specific Directories from Multiple Patterns

The `pattern` can also be an array:

```js
var metalsmith = new Metalsmith(__dirname)
  .use(flatten({
  	pattern: [
		"**/*",
		"!my-other-dir"
	]
  }));
```

### Skipping Flattening for a File

A will be ignored by the plugin if you set the `skipFlatten` option in the yaml metadata of a file to true.
