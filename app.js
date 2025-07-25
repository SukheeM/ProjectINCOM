//importacion de librerias 
import mongoose from "mongoose"; // nos permite conectarnos a mongo
import express from "express"; // crea el servidor
import dotenv from "dotenv"; // trae variables de entorno del archivo .env
import cors from "cors"; // seguridad
import { test } from "./backend/controllers/alumnos.controller.js";


dotenv.config(); // Acceder a la configuracion de dotenv

// conectar una base de datos
mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log("conecto la base de datos")
})
.catch((error)=>{
    console.log("No jalo la base ptm", error)
})//promesa

const app = express();//creando un servidor local
app.use(cors()); //Seguridad en el servidor
app.listen(4000, ()=> {
    console.log("Se escucha el servidor")
})// verificando funcionalidad del servidor

test();




