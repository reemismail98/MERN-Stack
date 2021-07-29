const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	setup: {
		type:String,
		minlength:[10,"setup at least 10 charecters"]},
	punchline: {
		type:String,
		minlength:[3,"punchline at least 10 charecters"]},
});

const User = mongoose.model("User", UserSchema);

module.exports = User;