import { userModel } from "../models/index.js";

class UserController{ //se crea la clase
    //find all user in db
    //recupere todos los usuarios
    //aqui se crea los metodos
    static async all(req, res, next){  
        try{
            const documents = await userModel.find({});
            //const documents = userModel.find(); //trae todos los documentos
            res.status(200).json({"datos":documents})
           // res.status(200).json(documents)
        }catch(err){
            next(err);
        }
    } //aqui return list

    static async lookById(req, res, next){
        try{
            const uid = req.params.id;
            const a_document = userModel.findById(uid);//findbyid son metodos de mongoose

            if (a_document === null) {
                //todo: mejorar la captura de errores
                res.status(404).json({"message":"User not found"})
            } else {
                res.status(200).json(a_document)
            }

        }catch(err){
            next(err);
        }
    } //here return object

    static async create(req, res, next){ //metodo para crear
        try{
            const data = req.body;
            const a_document = await userModel.create(data);
            res.status(201).json({"message":"success!",data:a_document})
        }catch(err){
            next(err);
        }
    } //here return object
    
    static async update(req, res, next){ //metodo para actualizar
        try{
           const uid = req.params.id;
           const data = req.body;
           const a_document = userModel.findByIdAndUpdate(uid, data);
           if (a_document === null) {
            //todo: mejorar la captura de errores
            res.status(404).json({"message":"User not found"})
        } else {
            res.status(201).json({"message":"update!",data:a_document})
        }
        }catch(err){
            next(err);
        }
    } //here return object

    static async delete(req, res, next){ //metodo para actualizar
        try{
           const uid = req.params.id;
           //const data = {active:false};
           //no a la eliminacion persistente
          // const a_document =userModel.findByIdAndUpdate(uid, data);
          const a_document = await userModel.findByIdAndDelete(uid);
           if (a_document === null) {
            //todo: mejorar la captura de errores
            res.status(404).json({"message":"User not found"})
        } else {
            res.status(201).json({"message":"update!",data:a_document})
        }
        }catch(err){
            next(err);
        }
    } //here return object

};

export default UserController;