/* build.js
 ***********/
var getBuildType = type => {
	if (typeof type !== 'string')   return 'default';
	if (type.toLowerCase() == 'ci') return 'default';
	return type.toLowerCase();
};

var getIsCI = () => {
	arg1 = process.argv[2]
	arg2 = process.argv[3]
	if (typeof arg1 !== 'string')   return false;
	if (arg1.toLowerCase() == 'ci') return true;
	if (typeof arg2 !== 'string')   return false;
	if (arg2.toLowerCase() == 'ci') return true;
	return false;
};

var getBuildOptions = (type, isCI) => {
	try { return require('./build-options.js')(type, isCI); }
	catch(e) { return {}; }
};

var isCI      = getIsCI(),
	buildType = getBuildType(process.argv[2]),
	options   = getBuildOptions(buildType, isCI),
	build     = require('build-buddy')(options);

/* Run build by typing one of the following in the console:
 * node build
 * node build dev  | dev:test    | dev:test:client  | dev:test:server
 * node build prod | prod:test   | prod:test:client | prod:test:server | prod:server
 * node build test | test:client | test:server
 ************************************************************************************/
build(buildType).then(() => {
	console.log('Build Complete!');
});