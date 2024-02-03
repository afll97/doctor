import express from "express";
import uroutes from "./user.js";
import citroutes from "./cita.js";
import roleroutes from "./role.js";
//import approutes from "./appoinment.js"
const routes = app =>{
    app.use(express.json(), uroutes, citroutes, roleroutes)
}

export default routes;