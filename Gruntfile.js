module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    'bower-install-simple': {
      all: {
        // all defaults
      },
    },

    connect: {
      example: {
        options: {
          port: 8088,
          open: 'http://localhost:8088/example.html',
          livereload: true,
        },
      },
    },

    watch: {
      example: {
        files: ['example.html'],
        options: {
          livereload: true,
        },
      },
    },

  });

  grunt.registerTask('serve', [
    'bower-install-simple',
    'connect',
    'watch'
  ]);

  grunt.registerTask('build', [
    'bower-install-simple',
  ]);

  grunt.registerTask('default', ['build']);

};
