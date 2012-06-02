define(['framework/core'], function(core){
    var userSchema = new core.mongoose.Schema({
        username: String,
        password: String,
        fullName: String,
        tagline: String,
        twitter: String,
        github: String
    });

    var userModel = core.mongoose.model('User', userSchema);

    return userModel;
});