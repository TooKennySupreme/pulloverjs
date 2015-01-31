module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*', '!grunt-template-jasmine-requirejs']
  });

  grunt.initConfig({

    'bower-install-simple': {
      all: {
        // all defaults
      },
    },

    jasmine: {
      test: {
        src: 'pullover.js',
        options: {
          specs: ['test/*-spec.js'],
          template: require('grunt-template-jasmine-requirejs'),
          templateOptions: {
            requireConfigFile: 'test/config.js'
          }
        }
      }
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
    'jasmine'
  ]);

  grunt.registerTask('default', ['build']);

};
