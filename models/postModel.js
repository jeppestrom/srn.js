define(['framework/core'], function(core){
    var postSchema = new core.mongoose.Schema({
        title: String,
        content: String,
        date: Date,
        draft: Boolean
    });

    var postModel = core.mongoose.model('Post', postSchema);

    return postModel;
});