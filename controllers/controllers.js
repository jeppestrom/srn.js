define(['controllers/index', 'controllers/post', 'controllers/manage'], function (index, post, manage) {
    return {
        index: new index(),
        post: new post(),
        manage: new manage()
    }
});