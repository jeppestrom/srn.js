define(['framework/core', 'services/blogService'], function (core, blogService) {
    var server = core.server;
    blogService = new blogService();

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