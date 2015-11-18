module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			cssbuild: {
				src: ["css/*.css"],
				dest: "dest/<%= pkg.name %>.css"
			}
		}, 	
		cssmin: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
				beautify: {
					ascii_only: true
				}
			},
			build: {
				files: [{
					"dest/<%= pkg.name %>.min.css": ['<%= concat.cssbuild.dest %>']
				}]
			}
		},
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['concat', 'cssmin']);
}