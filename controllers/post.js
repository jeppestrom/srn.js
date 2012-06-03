define(['framework/core', 'services/blogService'], function (core, blogService) {
    var server = core.server;
    blogService = new blogService();

    return core.Base.extend({
        constructor:function () {
            server.get('/archive', function(request, response){
                blogService.getAllPosts(function (posts) {
                    response.render('archive', {
                        title: 'post',
                        posts: posts
                    });
                });
            });

            server.post('/post/create', function(request, response){
                blogService.createPost({
                    title:request.body.title,
                    content: request.body.content,
                    draft: request.body.draft
                }, function () {
                    response.redirect('/');
                });
            });
        }
    });
});