module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: require('./grunt_tasks/less.js'),
        concat: require('./grunt_tasks/concat.js'),
        import: require('./grunt_tasks/import.js'),
        uglify: require('./grunt_tasks/uglify.js'),
        cssmin: require('./grunt_tasks/cssmin.js'),
        copy: require('./grunt_tasks/copy.js'),
        bake: require('./grunt_tasks/include.js'),
    });

    grunt.loadNpmTasks('grunt-import');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-bake");

    grunt.registerTask('default', ['less', 'concat', 'import', 'uglify', 'cssmin', 'copy', 'bake']);
    grunt.registerTask('dev', ['less', 'concat', 'import', 'bake']);
    grunt.registerTask('css', ['less']);
    grunt.registerTask('include', ['bake']);
    grunt.registerTask('js', ['concat', 'import']);
};
