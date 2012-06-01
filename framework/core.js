define(['./config', './Base', './server', 'mongoose'], function (config, Base, server, mongoose) {
    mongoose.connect(config.environment.devmode ? config.mongodb.endpoints.localhost : config.mongodb.endpoints.heroku);

    return {
        config: config,
        Base: Base,
        server: server,
        mongoose: mongoose
    }
});