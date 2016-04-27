'use strict';

module.exports = function(grunt) {
    grunt.registerTask('status', 'Shows status of node processes', ['shell:serverStatus']);
    grunt.registerTask('stop', 'Stop node processes', ['shell:serverStop']);
    grunt.registerTask('start', 'Start node processes', ['shell:serverStart']);
    grunt.registerTask('restart', 'Restart node processes', ['stop', 'start']);
    grunt.registerTask('logs', 'Tail logs for all pm2 processes', ['shell:serverLogs']);
};
