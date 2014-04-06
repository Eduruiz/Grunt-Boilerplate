module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'assets/js/main.js',
        dest: 'assets/js/build/main.min.js'
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed'
        },
        files: {                         // Dictionary of files
          'assets/css/main.css': 'assets/sass/main.scss'
        }
      }
    },
    
    imagemin: {                          
      dynamic: {                         
        files: [{
          expand: true,
          cwd: 'assets/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'assets/images/build'
        }]
      }
    },

    watch: {
      scripts: {
        files: ['assets/js/*.js'],
        tasks: ['uglify'],
        options: {
          livereload: true,
        },
      },
      sass: {
        files: ['assets/sass/*.scss','*.php'],
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    },
   
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'imagemin']);

};