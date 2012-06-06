define(['framework/core', 'services/blogService', 'services/userService'], function (core, blogService, userService) {
    var server = core.server;
    blogService = new blogService();
    userService = new userService();

    return core.Base.extend({
        constructor:function () {
            server.get('/', function(request, response){
                blogService.getLivePosts(function (posts) {
                    response.render('index', {
                        title: 'srn.io',
                        posts: posts
                    });
                });
            });
        }
    });
});