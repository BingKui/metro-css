module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			cssbuild: {
				src: ["css/*.css"],
				dest: "dest/<%= pkg.name %>.css"
			}
		},
		autoprefixer: {
			dist: {
				files: {
					'dest/<%= pkg.name %>.autoprefixer.css': '<%= pkg.name %>.css'
				}
			}
		},
		csslint: {
			options: {
				csslintrc: '.csslintrc'
			},
			dist: [
				'dest/<%= pkg.name %>.autoprefixer.css'
			]
		},
		cssmin: {
			options: {
				banner: '/*!\n' +
					' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
					' * Copyright 2015-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
					' */\n',
				beautify: {
					ascii_only: true
				}
			},
			build: {
				files: [{
					"dest/<%= pkg.name %>.min.css": ['dest/<%= pkg.name %>.autoprefixer.css']
				}]
			}
		},
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['concat','autoprefixer','csslint', 'cssmin']);
}