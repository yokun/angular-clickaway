/* build-options.js
 *******************/
var getCommonOptions = () => {
	// Add shared dev and prod build options here:
	return {
		angular: {
			moduleName: 'yo-clickaway'
		}

		// spa: { src: { filePath: 'spa.html' } } // example
	};
};

var setDevOptions = options => {
	// Add dev specific build options here:
	// options.angular = { templateCache: { dev: true } }; // example
};

var setProdOptions = options => {
	// Add prod specific build options here:
	// options.minify = { css: { splitMinFile: false } }; // example
};

var setCiOptions = options => {
	// Add prod specific build options here:
	options.exclude = {
		default: {
			client: { files: true },
			server: { files: true }
		},
		from: {
			dist: {
				client: [
					'views/**',
					'scripts/*/**',
					'scripts/router.*',
					'scripts/!clickaway.es6'
				]
			}
		}
	}
};

var getOptions = (buildType, isCI) => {
	var options = getCommonOptions();
	if (buildType.indexOf('prod') != -1) setProdOptions(options);
	if (isCI) setCiOptions(options);
	else setDevOptions(options);
	return options;
}

module.exports = getOptions