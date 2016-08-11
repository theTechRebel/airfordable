module.exports =function(grunt){

	grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),

			jshint:{
				//define files to lint
				files: ['Gruntfile.js','models/**/*.js','public/**/*.js','routes/**/*.js','app.js'],
				options: {'curly':true,
														'globals': {
							          'jQuery': true,
							          'node':true
        }}
			},

			watch:{
				options:{
					livereload: true
				},
				express:{
						files:['<%= jshint.files %>','views/**/*.ejs'],
						tasks: ['express'],
						options:{
							spawn:false
						}	
				},
				files:['<%= jshint.files %>','views/**/*.ejs'],
				tasks:['jshint']
			},

			express: {
    options: {
      background: true,
      node_env: 'development',
      debug: true
    },
    dev: {
      options: {
        script: 'bin/www'
      }
    }
  }
	});

			grunt.loadNpmTasks('grunt-contrib-jshint');
			grunt.loadNpmTasks('grunt-contrib-watch');
			grunt.loadNpmTasks('grunt-express-server');

			grunt.registerTask('default',['jshint','express','watch']);
};