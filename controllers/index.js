server.get('/', function(request, response){
    response.render('index', {
        title: 'Index'
    });
});

server.get('/test', function(request, response){
    response.render('index', {
        title: 'Test'
    });
});
