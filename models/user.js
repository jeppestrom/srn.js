define(function () {
    var userModel = new Schema({
        username: String,
        password: String,
        email: String
    });

    var model = mongoose.model('User', userModel)

    return {
        model: model
    };
});