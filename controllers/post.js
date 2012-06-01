define(['framework/core'], function (core) {
    return core.Base.extend({
        constructor:function () {
            core.server.get('/post', function(request, response){
                response.render('index', {
                    title: 'post'
                });
            });
        }
    });
});