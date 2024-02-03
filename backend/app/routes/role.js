//En esta parte es la vista que son las rutas for frontend
import  express  from "express";
import RoleController from "../controllers/RoleController.js"
const roleRoutes = express.Router();

//metodos para http son get,put,post,delete 
roleRoutes.get("/roles", RoleController.all); //ruta que permite obtener todos los roles
roleRoutes.get("/roles/:id", RoleController.lookById);//get(obtengo) y post(envio) put(actualizo)son metodos http

roleRoutes.post("/roles", RoleController.create);
roleRoutes.put("/roles/:id", RoleController.update);

roleRoutes.delete("/roles/:id", RoleController.delete);//preferible no eliminar sino cambiar estado del usuario con un boolean

export default roleRoutes;