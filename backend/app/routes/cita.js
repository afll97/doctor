import  express  from "express";
import CitaController from "../controllers/CitaController.js"
const citaRoutes = express.Router();

citaRoutes.get("/citas", CitaController.all);
citaRoutes.get("/citas/:id", CitaController.lookById);//get(obtengo) y post(envio) put(actualizo)son metodos http

citaRoutes.get("/citas/:id/doctor", CitaController.lookByDoctor);//busqueda de doctor
citaRoutes.get("/citas/:id/patient", CitaController.lookByPatient);

citaRoutes.get("/citas/query?email=:email", CitaController.lookByEmail);

citaRoutes.post("/citas", CitaController.create);
citaRoutes.put("/citas/:id", CitaController.update);

citaRoutes.delete("/citas/:id", CitaController.delete);

export default citaRoutes;