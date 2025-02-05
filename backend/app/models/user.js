import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required : [true, "user full-name is required"],
        validate:{
            validator: (a_name)=>{
                const len = a_name.length;
                return len >= 5 && len <=100;
            },
            message:"name length over 5 characters"
        }
    },
    lastname: {
        type: mongoose.Schema.Types.String,
        required : [true, "user full-name is required"],
        validate:{
            validator: (a_name)=>{
                const len = a_name.length;
                return len >= 5 && len <=100;
            },
            message:"name length over 5 characters"
        }
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: [true, "user full-name is required"],
        index:{unique:true}
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    active:{
        type: mongoose.Schema.Types.Boolean,
        default:true
    },
    
    rol_id: { type: mongoose.Schema.Types.ObjectId, ref: 'role', required:  [true,"please, choose a role"]  }

});

const userModel = new mongoose.model("user",userSchema);

export {userModel, userSchema};