define(['./config', 'lib/Base', './server', 'mongoose'], function (config, Base, server, mongoose) {
    return {
        config: config,
        Base: Base,
        server: server,
        mongoose: mongoose
    }
});