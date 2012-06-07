define(['framework/core', 'services/blogService'], function (core, blogService) {
    var server = core.server;
    blogService = new blogService();

    return core.Base.extend({
        constructor:function () {
            server.get('/favicon.ico', function (request, response) { response.end(); }); // quick workaround, needs a proper fix

            server.get('/:url', function (request, response) {
                var posts = [];

                blogService.getPostByUrl({url: request.params.url}, function (post) {
                    posts.push(post);

                    response.render('index',{
                        title: post.title + ' - srn.io',
                        posts: posts
                    });
                });
            });

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