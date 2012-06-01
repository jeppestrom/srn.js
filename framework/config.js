define(function(){
    var mongodb = {
        endpoints:{
            localhost: 'mongodb://localhost/test',
            heroku: process.env.MONGOLAB_URI
        }
    };

    var port = process.env.PORT || 8000;
    var environment = {
        port:port,
        devmode:port == 8000 ? true : false
    };

    return {
        environment: environment,
        mongodb: mongodb
    };
})