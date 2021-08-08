const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: { type: String ,
        required: [true, "Name is required"],
        minlength:[3,"Name at least 3 charecters"]
}}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);
