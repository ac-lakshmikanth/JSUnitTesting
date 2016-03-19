module.exports = function (grunt) {
	grunt.initConfig({
		karma: {
			unit: {
				options: {
					configFile: "karma.conf.js",
					port: 9999,
					singleRun: false,
					logLevel: 'ERROR'
				}
			},
			dev: {
				reporters: 'dots'
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-karma');
	grunt.registerTask('default',['karma:unit']);
};