module.exports = plugin;

function plugin(options) {
	options = normalize(options);

	return function (files, metalsmith, done) {
		setImmediate(done);

		Object.keys(files).forEach(function (file) {
			var data = files[file];
			var newPath = (options.prefix || "") + file.replace(/\//g, "-").replace(/\\/g, "-");

			delete files[file];
			files[newPath] = data;
		});
	};
}

function normalize(options) {
	if ('string' == typeof options) options = { prefix: options };
	options = options || {};
	return options;
}