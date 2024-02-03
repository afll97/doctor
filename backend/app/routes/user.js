import  express  from "express";
import UserController from "../controllers/UserController.js"
const userRoutes = express.Router();

userRoutes.get("/user", UserController.all);
userRoutes.get("/user/:id", UserController.lookById);//get(obtengo) y post(envio) put(actualizo)son metodos http
//roleRoutes.get("/roles?name:name", RoleController.lookByName); busqueda por nombre
userRoutes.post("/user", UserController.create);
userRoutes.put("/user/:id", UserController.update);
userRoutes.delete("/user/:id", UserController.delete);

export default userRoutes;