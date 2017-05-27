  module.exports = function(grunt) {

    grunt.initConfig ({
      responsive_images: {
        dev: {
          options: {
            engine: 'im',
            sizes: [{
              width: 800,
              suffix: '_large_2x',
              quality: 30
            }]
          },
          files: [{
            expand: true,
            src: ['*.{gif,jpg,png}'],
            cwd: 'images_src/',
            dest: 'images/'
          }]
        }
      },
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-imagemin')
  grunt.registerTask('default', ['responsive_images']);};

