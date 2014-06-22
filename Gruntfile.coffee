# global module:false
module.exports = (grunt) ->

    # Project configuration.
    grunt.initConfig

        srcPath: 'app'
        vendorPath: 'vendor'
        outputPath: '_site'
        cssOutputPath: '<%= outputPath %>/css'
        jsOutputPath: '<%= outputPath %>/js'

        coffee:
            compile:
                expand: true
                flatten: false
                cwd: '<%= srcPath %>/scripts'
                src: '**/*.coffee'
                dest: '<%= jsOutputPath %>'
                ext: '.js'

            main:
                files:
                    '<%= jsOutputPath %>/application.js': '<%= srcPath %>/scripts/application.coffee'

        less:
            options:
                cleancss: false
                sourceMap: true
            compile:
                expand: true
                flatten: true
                src: '<%= srcPath %>/**/*.less'
                dest: '<%= cssOutputPath %>/<%= srcPath %>'
                ext: '.css'

        jade:
            compile:
                options:
                    amd: true
                    client: true
                    namespace: false
                expand: true
                flatten: false
                cwd: '<%= srcPath %>'
                src: 'templates/**/*.jade'
                dest: '<%= jsOutputPath %>'
                ext: '.js'

        copy:
            otherCrap:
                expand: true
                flatten: false
                cwd: '<%= srcPath %>'
                src: [
                    '**'
                    '!**/*.coffee'
                    '!**/*.less'
                    '!**/*.js'
                ]
                dest: '<%= outputPath %>'
                filter: 'isFile'

            moreCrap:
                expand: true
                flatten: false
                cwd: '<%= srcPath %>/scripts'
                src: [
                    '**/*.js'
                ]
                dest: '<%= jsOutputPath %>'
                filter: 'isFile'

            vendorCSS:
                expand: true
                flatten: true
                src: ['<%= vendorPath %>/**/*.css']
                dest: '<%= cssOutputPath %>/<%= vendorPath %>'
                filter: 'isFile'

            vendorJS:
                expand: true
                flatten: true
                src: ['<%= vendorPath %>/**/*.js']
                dest: '<%= jsOutputPath %>/<%= vendorPath %>'
                filter: 'isFile'

        concat:
            app: files:
                "<%= cssOutputPath %>/<%= srcPath %>.css": "<%= cssOutputPath %>/<%= srcPath %>/**/*.css"
                # "<%= jsOutputPath %>/<%= srcPath %>.js": "<%= jsOutputPath %>/<%= srcPath %>/**/*.js"

            vendor: files:
                "<%= cssOutputPath %>/<%= vendorPath %>.css": "<%= cssOutputPath %>/<%= vendorPath %>/**/*.css"
                # "<%= jsOutputPath %>/<%= vendorPath %>.js": "<%= jsOutputPath %>/<%= vendorPath %>/**/*.js"

        watch:
            options:
                livereload: true

            html:
                files: '<%= srcPath %>/**/*.html'
                tasks: ['copy']

            coffee:
                files: "<%= coffee.compile.src %>"
                tasks: ['coffee', 'copy', 'concat']

            less:
                files: "<%= less.compile.src %>"
                tasks: ['less', 'copy', 'concat']

            jade:
                files: '<%= jade.compile.cwd %>/<%= jade.compile.src %>'
                tasks: ['jade']

        clean: ['<%= outputPath %>']

    # These plugins provide necessary tasks.
    grunt.loadNpmTasks "grunt-contrib-concat"
    grunt.loadNpmTasks "grunt-contrib-copy"
    grunt.loadNpmTasks 'grunt-contrib-clean'
    grunt.loadNpmTasks "grunt-contrib-coffee"
    grunt.loadNpmTasks "grunt-contrib-jade"
    grunt.loadNpmTasks "grunt-contrib-less"
    grunt.loadNpmTasks "grunt-contrib-watch"

    # Default task.
    grunt.registerTask "build", ['clean', 'coffee', 'jade', 'less', 'copy', 'concat']
    grunt.registerTask "default", 'build'
