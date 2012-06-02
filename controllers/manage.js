define(['framework/core', 'services/blogService', 'services/userService'], function (core, blogService, userService) {
    var server = core.server;
    blogService = new blogService();
    userService = new userService();

    return core.Base.extend({
        constructor:function () {
            server.get('/manage', function(request, response){
                response.render('manage', {
                    title: 'manage - srn.io',
                    user: request.session.login
                });
            });

            server.get('/manage/logout', function (request, response) {
                request.session.login = null;

                response.redirect('/');
            });
        }
    });
});