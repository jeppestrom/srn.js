define(['framework/core'], function (core) {
    var server = core.server;

    return core.Base.extend({
        constructor:function () {
            server.get('/', function(request, response){
                response.render('index', {
                    title: 'srn.io'
                });
            });
        }
    });
});