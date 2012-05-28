server.get('/', function(request, response){
    response.render('index', {
        title: 'Index'
    });
});

server.get('/user', function(request, response){
    User.findOne({email: 'brokzftw@gmail.com'}, function(error, user){
        response.render('index', {
            title: 'Test',
            user: user
        });
    });

});

server.get('/user/create', function(request, response){
    var user = new User();
    user.email = 'brokzftw@gmail.com';

    user.save(function(error){
        console.log('mongo saved account: ', user);
    });

    response.render('index', {
        title: 'Test'
    });
});
