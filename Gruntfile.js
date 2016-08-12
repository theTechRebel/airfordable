module.exports =function(grunt){

	grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),

			jshint:{
				//define files to lint
				files: ['Gruntfile.js','app.js','models/**/*.js','public/**/*.js','routes/**/*.js'],
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
						files:['<%= jshint.files %>','views/**/*.ejs','config/**/*.json','public/**/*.*','bin/**/*.*'],
						tasks: ['express'],
						options:{
							spawn:false
						}	
				},
				files:['<%= jshint.files %>','views/**/*.ejs','config/**/*.json','public/**/*.*','bin/**/*.*'],
				tasks:['jshint']
			},

			express: {
    options: {
      background: true,
      fallback: function(err) {
      	console.log('Server crashed: '+err);
      },
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