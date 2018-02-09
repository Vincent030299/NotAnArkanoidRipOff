"use strict";

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            js: {
                files: ['js/app.js'],
                tasks: ['uglify']
            },
            sass: {
                files: ['sass/**/**.scss'],
                tasks: ['sass', 'cssmin']
            }
        },
        browserSync: {
            bsFiles: {
                src : ['**/*.css', '**/*.js']
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: "./"
                }
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'css/app.min.css': ['css/app.css']
                }
            }
        },
        uglify: {
            options: {
                mangle: {
                    toplevel: true
                }
            },
            my_target: {
                files: {
                    'js/app.min.js': ['js/**.js']
                }
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/app.css': 'sass/app.scss'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['uglify', 'sass', 'cssmin', 'browserSync', 'watch']);
};