define(['framework/core', 'services/blogService'], function (core, blogService) {
    var server = core.server;
    blogService = new blogService();

    return core.Base.extend({
        constructor:function () {
            server.get('/archive', function(request, response){
                blogService.getLivePosts(function (posts) {
                    response.render('archive', {
                        title: 'Archive - srn.io',
                        posts: posts
                    });
                });
            });

            server.post('/post/create', ensureAuthenticated,  function(request, response){
                blogService.createPost(request.body, function () {
                    response.redirect('/');
                });
            });
        }
    });
});