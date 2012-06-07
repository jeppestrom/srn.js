define(['framework/core', 'models/postModel'], function (core, postModel) {
    return core.Base.extend({
        constructor:function () {
            this.postModel = postModel;
        },

        createPost:function (options, callback) {
            var blogPost = new this.postModel();

            blogPost.title = options.title;
            blogPost.content = options.content;
            blogPost.draft = options.draft == 'true'; // dirty hack until we're gonna use json.parse()

            blogPost.save(function(error){
                if (error != null)
                    throw new Error('Something went wrong..', error);

                callback();
            });
        },

        getPostByUrl:function (options, callback) {
            this.postModel.findOne({url:options.url}, function (error, post) {
                callback(post);
            });
        },

        getAllPosts:function (callback) {
            this.postModel.find({}, function (error, posts) {
                callback(posts);
            });
        },

        getLivePosts:function (callback) {
            this.postModel.find({draft: false}, function (error, posts) {
                callback(posts);
            });
        },

        getDrafts:function (callback) {
            this.postModel.find({draft: true}, function (error, posts) {
                callback(posts);
            });
        }
    });
});