module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'css/style.css': 'scss/style.scss',
          'css/theme.css': 'scss/theme.scss'
        }
      }
    },

    watch: {
      grunt: {
        files: ['Gruntfile.js']
      },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    },
    imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: './images/',
                    src: '{,*/}**/*.{png,jpg,jpeg,svg}',
                    dest: './images/compressed'
                }]
            }
        }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('optimize', ['imagemin']);
  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build', 'watch']);
}
