const mongoose = require('mongoose');
const {Schema} = mongoose;

const LoginSchema = new Schema({
    email:{type: String, required:true},
    contrasenia:{type: String, required:true}
});

module.exports = mongoose.model.Login || mongoose.model('Login',LoginSchema);