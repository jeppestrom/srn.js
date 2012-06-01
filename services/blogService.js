define(['framework/core', 'models/postModel'], function (core, postModel) {
    return core.Base.extend({
        constructor:function () {
            this.postModel = postModel;
        },

        createPost:function () {
            var test = new this.postModel();

            test.title = 'srn.js';
            test.content = 'whatup';

            test.save(function(error){
                if (error != null)
                    throw new Error('Something went wrong..', error);
            });
        },

        getAllPosts:function (callback) {
            this.postModel.find({}, function (error, posts) {
                callback(posts);
            });
        }
    });
});