module.exports = function (grunt) {
	// So we don't need to grunt.loadNpmTasks(...) with every plugin
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			// Re-compile main JS file when client JS changes
			browserify: {
				files: ['src/**/*.js'],
				tasks: ['browserify:dev']
			}
		},

		browserify: {
			// Compile main JS file from sources under /client. Browserify will include dependencies added with
			// require/import in the bundle.
			dev: {
				options: {
					browserifyOptions: {
						transform: [
							['babelify', {presets: ['es2015', 'react']}]
						],
						debug: true
					}
				},
				src: ['src/**/*.js'],
				dest: 'dist/app.js'
			}
		}
	});

	// Compile the JS to a single bundle file and watch for changes to recompile. Suitable for development
	grunt.registerTask('default', ['browserify:dev', 'watch:browserify']);

	// Compile the JS to a bundle only
	grunt.registerTask('build', ['browserify:dev']);
}