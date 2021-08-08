const mongoose = require('mongoose');
const ManagerSchema = new mongoose.Schema({
    name: { type: String ,
        required: [true, "Name is required"],
        minlength:[3,"Name at least 3 charecters"]
},
    position: { type: String},
    Game1:{type: String},
    Game2:{type: String},
    Game3:{type: String},
}, { timestamps: true });
module.exports.Manager = mongoose.model('Manager', ManagerSchema);