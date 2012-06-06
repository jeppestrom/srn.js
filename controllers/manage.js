define(['framework/core', 'services/blogService', 'services/userService'], function (core, blogService, userService) {
    var server = core.server;
    blogService = new blogService();
    userService = new userService();

    return core.Base.extend({
        constructor:function () {
            server.get('/manage', ensureAuthenticated, function(request, response){
                response.render('manage', {
                    title: 'manage - srn.io',
                    user: request.session.user
                });
            });

            server.get('/manage/firstrun', function (request, response) {
                userService.createUser();

                response.redirect('/');
            });

            server.post('/login', function (request, response) {
                userService.getUser({username: request.body.username, password: request.body.password}, function (user) {
                    if (user == null)
                        response.redirect('/');
                    else {
                        request.session.user = request.body.username;
                        response.redirect('/manage');
                    }
                });

            });

            server.get('/manage/logout', function (request, response) {
                delete request.session.user;

                response.redirect('/');
            });
        }
    });
});