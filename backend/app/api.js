//import * as dotenv from 'dotenv'
//dotenv.config()

import "dotenv/config"; //
import express from "express";  //importa el framework
import conectar from "./config/database.js";  //importa la conexion de la db
import routes from "./routes/index.js";

conectar();//conexion a la DB

/*const dconnection = await conectar();   //

dconnection.on("error", function(err){
    console.log(`Error de conexion, ${err}`);
});

    dconnection.on("open", ()=>{
    console.log("Sucessful connection");
});
*/
const app = express() //se utiliza el framework para crear los endpoints
//vinculo todas las rutas a express
routes(app);//se incluyen las rutas

app.listen(
    process.env.PORT,
    () => console.log(`Server alive in:127.0.0.1:${process.env.PORT}`)
)

//function
//const una = (a)=>{
 //   console.log("hola");
//}
//const dos = function(p){
 //   console.log("como estas?");
//}
//function tres (b){
   // console.log("hola");
//}
