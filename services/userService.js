define(['framework/core', 'models/userModel'], function (core, usermodel) {
    return core.Base.extend({
        constructor:function () {
            this.userModel = usermodel;
        },

        createUser:function () {
            var user = new this.userModel();

            user.username = 'soeren';
            user.password = 'test';

            user.save(function(error){
                if (error != null)
                    throw new Error('Something went wrong..', error);
            });
        },

        getUser:function (options, callback) {
            this.userModel.findOne({username:options.username}, function (error, user) {
                if (error || user.password != options.password)
                    callback(null);

                callback(user);
            });
        }
    });
});