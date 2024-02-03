import mongoose from "mongoose";
//console.log("db user,",process.env.DBUSER);

const conectar = async() =>{
    try {
        const dconnection = await mongoose.connect(`mongodb://${process.env.DBHOST}:${process.env.DBPORT}/${process.env.DBNAME}`)

        dconnection.on("error", function(err){
            console.log(`Error de conexion, ${err}`);
              } );
    dconnection.on("open", ()=>{
        console.log("Sucessful connection");
             });
            return mongoose.connection;
        }catch(err){

        }
    }

//async function conectar(){
    //template
   // mongoose.connect("mongodb://username@password@127.0.0.1:27017/dscheduler");
   // mongoose.connect(`mongodb://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBHOST}:${process.env.DBPORT}/${process.env.DBNAME}`) //variables de entorno que permite la conexion de db
  // mongoose.connect(`mongodb://${process.env.DBHOST}:${process.env.DBPORT}/${process.env.DBNAME}`) 
   //return mongoose.connection;
//}
export default conectar;