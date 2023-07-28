const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user schema & model
const UserSchema = new Schema({

    firstName: {
        type: String,
        required: [true, 'First Name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required']
    },
    
    mobile: {
        type: String
    },

    city: {
        type:String
    }
    
});


const User = mongoose.model('user',UserSchema);

module.exports = User;