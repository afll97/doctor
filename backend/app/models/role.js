import mongoose from "mongoose";
const roleSchema = new mongoose.Schema({ //aqui recibe objetos json
    name: {
        type: mongoose.Schema.Types.String,
        required: [true,"le falto nombre"],
        index:{unique:true},
    
    //aqui se valida para que el name no tenga espacios
    validate: {
        validator:(a_name)=>{
            return a_name.indexOf(" ") < 0;
              },
        message : "name contains white spaces"
         }
    },
    descripcion: {
        type: mongoose.Schema.Types.String,
        required :[true,"le falta descripcion"]
    }
});

const roleModel = new mongoose.model("role",roleSchema);

export {roleModel, roleSchema};