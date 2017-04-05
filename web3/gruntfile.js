module.exports = function(grunt) {
 
  grunt.initConfig(
  {
		pkg: grunt.file.readJSON('package.json'),
		
    clean: 
		{			
			js: ['js/built.js'],
			build: ['build/**'],	
		},
		
    concat: 
    {
      options: 
      {
        separator: '\n'
      },
    
      dist: 
      {        
				src: 
				[
					'js/shape.js'
					,'js/circle.js'
					,'js/triangle.js'
					,'js/rectangle.js'
					,'js/script.js'
					,'js/selectObject.js'
				],
        dest: 'js/built.js',
      },
    },

    eslint: 
    {
        target: ['js/built.js']
    },
		
		// connect: 
		// {						
			// meta: 
			// {
				// port: 2000,
				// base: ''
			// }
		// },  
		
		connect:
		{
			server:
			{
				options:
				{
					hostname: 'localhost',
					port: 2000,
					base: '',
					livereload: true
				}
			}
		},
		
		open:
		{
			dev:
			{
				path: 'http://localhost:2000/index.html',
				app: ''
			}
		},
		
		watch: 
		{
			options: 
			{
				livereload: true
			},
			
			task:
			{
				files: ['index.html'],
				tasks: ['default'],
				options:
				{
					livereload: true
				}
			},
			
			js: 
			{
				files: ['js/*.*'],
				tasks: ['concat', 'eslint', 'cacheBust'],
				options: 
				{
					livereload: true
				}
			},
			
			css: 
			{
				files: ['css/*.*'],
				tasks: ['default'],
				options: 
				{
					livereload: true
				}
			}
		},
		
		cacheBust: 
		{
			task: 
			{
				options: 
				{						
					deleteOriginals: true,
					assets: ['build/**']
				},
				src: ['index.html']
			}
    },
		
		copy: 
		{
			css: 
			{
				src: 'node_modules/bootstrap/dist/css/bootstrap.min.css',
				dest: 'build/bootstrap.min.css',
			},
			
			js:
			{
				src: 'js/built.js',
				dest: 'build/built.js',
			},
			
			index:
			{
				src: 'index.html',
				dest: 'build/index.html',				
			}
		},	
});
 
  grunt.registerTask('default', 
	[ 'clean'
	, 'concat'
	, 'eslint'
	, 'copy:js'
	, 'copy:css'
	, 'cacheBust'		
	, 'copy:index'
	, 'open'		
	, 'connect'		
	, 'watch'
	]);	
  
	grunt.loadNpmTasks('grunt-contrib-copy');	
	grunt.loadNpmTasks('grunt-cache-bust');     
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-open');	
	grunt.loadNpmTasks('grunt-contrib-connect');		
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-eslint');   	
};