'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.initConfig({
    clean: {
      build: {
        src: ['public/']
      }
    },

    copy: {
      build: {
        expand: true,
        cwd: 'app/',
        src: ['**/*.html', '**/*.css'],
        dest: 'public/',
        flatten: false,
        filter: 'isFile'
      }
    },
    browserify: {
      dev: {
        src: ['app/js/**/*.js'],
        dest: 'public/bundle.js'
      },
      options: {
        transform: ['debowerify']
      }
    },
    nodemon: {
      dev: {
        script: 'server.js'
      }
    }
  });
  grunt.registerTask('build', ['clean', 'browserify', 'copy', 'nodemon:dev']);
};
