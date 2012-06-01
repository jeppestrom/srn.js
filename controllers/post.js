define(['framework/core', 'services/blogService'], function (core, blogService) {
    var server = core.server;
    blogService = new blogService();

    return core.Base.extend({
        constructor:function () {
            server.get('/posts', function(request, response){
                blogService.getAllPosts(function (posts) {
                    response.render('index', {
                        title: 'post',
                        posts: posts
                    });
                });
            });

            server.get('/post/create', function(request, response){
                blogService.createPost();

                response.render('index', {
                    title: 'post'
                });
            });
        }
    });
});