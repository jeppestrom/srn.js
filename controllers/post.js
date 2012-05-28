server.get('/post', function(request, response){
    response.render('index', {
        title: 'Post'
    });
});