var UserSchema = new Schema({
    username: String,
    password: String,
    email: String
});

this.User = mongoose.model('User', UserSchema);