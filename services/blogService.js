define(['framework/core', 'models/postModel'], function (core, postModel) {
    return core.Base.extend({
        constructor:function () {
            this.postModel = postModel;
        },

        createPost:function (options, callback) {
            var test = new this.postModel();

            test.title = options.title;
            test.content = options.content;
            test.draft = options.draft;

            test.save(function(error){
                if (error != null)
                    throw new Error('Something went wrong..', error);

                callback();
            });
        },

        getAllPosts:function (callback) {
            this.postModel.find({}, function (error, posts) {
                callback(posts);
            });
        }
    });
});