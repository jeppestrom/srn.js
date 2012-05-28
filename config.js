define(function(){
    var mongodb = {
        endpoints:{
            localhost: 'mongodb://localhost/test',
            heroku: process.env.MONGOLAB_URI
        }
    };

    return {
        mongodb: mongodb
    };
})
