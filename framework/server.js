define(['express'], function(express){
    var server = express.createServer();

    server.configure(function(){
        server.set('views', 'views');
        server.set('view engine', 'jade');
        server.set("view options", { layout: "layout" });
        server.use(express.bodyParser());
        server.use(express.methodOverride());
        server.use(express.cookieParser());
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