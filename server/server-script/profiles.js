const User = mongoose.model('User', {
    username: String,
    progress: Object, // Store game progress
    achievements: Array
});
