var requirejs = require('requirejs').config({nodeRequire:require});

requirejs(['framework/core', 'controllers/controllers'], function(core, controllers) {
    var me = this,
        config = core.config;


    core.server.listen(config.environment.port, function(){
        console.log("node server listening on port '%d' in '%s' mode.", config.environment.port, config.environment.devmode ? 'development' : process.env.NODE_ENV);
    });
});