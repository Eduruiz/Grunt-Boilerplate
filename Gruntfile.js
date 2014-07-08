module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      my_target: {
        files: [{
            expand: true,
            cwd: 'assets/js',
            src: '*.js',
            dest: 'assets/js/build'
        }]
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed'
        },
        files: {                         // Dictionary of files
          'assets/css/main.css': 'assets/sass/main.scss'
          // ,
          // 'assets/css/flexslider.css': 'assets/sass/flexslider.scss'
        }
      }
    },
    
    imagemin: {                          
      dynamic: {                         
        files: [{
          expand: true,
          cwd: 'assets/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'assets/built-images/'
        }]
      }
    },

    autoprefixer: {
      dist: {
        files: {
            'assets/css/main.css': 'assets/css/main.css'
        },
        options: {
          browsers: ['last 2 version', 'ie 8', 'ie 9']
        }
      }
    },

    browserSync: {
    files: {
        src : 'assets/css/main.css'
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
        files: ['assets/sass/*.scss','**/*.php'],
        tasks: ['sass','autoprefixer'],
        options: {
          livereload: false,
        },
      },
      files: {
        files: ['**/*.php'],
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
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-newer');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'imagemin', 'autoprefixer']);

};