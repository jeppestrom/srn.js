define(['controllers/index', 'controllers/post'], function (index, post) {
    return {
        index: new index(),
        post: new post()
    }
});