var multimatch = require("multimatch");

module.exports = plugin;

var DEFAULT_PATTERN = "**/*";

function plugin(options) {
	options = normalize(options);

	return function (files, metalsmith, done) {
		setImmediate(done);

		Object.keys(files).filter(function (path) {
			return multimatch(path, options.pattern).length > 0;
		}).forEach(function (file) {
			var data = files[file];
			if (data.skipFlatten) {
				return;
			}

			var newPath = (options.prefix || "") + file.replace(/\//g, "-").replace(/\\/g, "-");

			delete files[file];
			files[newPath] = data;
		});
	};
}

function normalize(options) {
	if ('string' == typeof options) options = { pattern: options };
	options = options || {};
	options.pattern = options.pattern || DEFAULT_PATTERN;
	return options;
}