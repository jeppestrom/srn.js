var requirejs = require('requirejs').config({nodeRequire:require});

requirejs(['./config', 'express', 'mongoose'], function(config, express, mongoose) {
    var me = this;

    this.server = express.createServer();
    var port = process.env.PORT || 8000;

    this.devmode = port == 8000 ? true : false;

    mongoose.connect(this.devmode ? config.mongodb.endpoints.localhost : config.mongodb.endpoints.heroku);

    server.configure(function(){
        server.set('views', __dirname + '/views');
        server.set('view engine', 'jade');
        server.set("view options", { layout: "layout" });
        server.use(express.bodyParser());
        server.use(express.methodOverride());
        server.use(express.cookieParser());
        server.use(function (request, response, next) {
            response.removeHeader("X-Powered-By");
            next();
        });
        server.use(express.static(__dirname + '/public'));
        server.use(server.router);
    });

    server.configure('development', function(){
        server.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    });

    server.configure('production', function(){
        server.use(express.errorHandler());
    });

    requirejs([
        './controllers/index.js',
        './controllers/post.js'
    ]);

    server.listen(port, function(){
        console.log("node server listening on port '%d' in '%s' mode.", port, me.devmode ? 'development' : process.env.NODE_ENV);
    });
});