import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    phone: {type: String, required: true},
    document: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    money: {type: Number, required: false}
});

const userModel = mongoose.model("User", userSchema);

export default userModel;