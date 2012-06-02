define(['./config', 'express'], function(config, express){
    var server = express.createServer();

    var MongoStore = require('connect-mongo')(express);

    server.configure(function(){
        server.set('views', 'views');
        server.set('view engine', 'jade');
        server.set("view options", { layout: "layout" });
        server.use(express.bodyParser());
        server.use(express.methodOverride());
        server.use(express.cookieParser());
        server.use(express.session({
            secret: config.environment.devmode ? 'whatupdawg' : config.environment.session.secret,
            store: new MongoStore({ url: config.environment.devmode ? config.mongodb.endpoints.localhost : config.mongodb.endpoints.heroku })
        }));
        server.use(function (request, response, next) {
            response.removeHeader("X-Powered-By");
            next();
        });
        server.use(express.static('public'));
        server.use(server.router);
    });

    server.configure('development', function(){
        server.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    });

    server.configure('production', function(){
        //server.use(express.errorHandler());
        server.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    });

    return server;
});