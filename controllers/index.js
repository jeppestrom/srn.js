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

            server.get('/feed.rss', function (request, response) {
                var rss = require('rss');
                var feed = new rss({
                    title: 'srn.io (Soren Brokaer)',
                    description: 'Software-developer  @spiir, loves .net, ruby, nodejs and knockoutjs. 18 years old.',
                    feed_url: 'http://srn.io/feed.rss',
                    site_url: 'http://srn.io',
                    author: 'Soren Brokaer'
                });

                blogService.getLivePosts(function (posts) {
                    posts.forEach(function (post) {
                        feed.item({
                            title: post.title,
                            description: post.content.substring(0, 50),
                            url: 'http://srn.io/', // TODO: post.url
                            date: post.date
                        });
                    });

                    response.header("Content-Type", "application/rss+xml");
                    response.end(feed.xml());
                });
            });
        }
    });
});