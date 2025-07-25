import { TablaAlumnos } from "../models/alumnos.model.js";


TablaAlumnos.create({
    name:"Jesus",
    edad:25,
    calificacion:10
    
},{
    name:"Jessy",
    edad:24,
    calificacion:9.9

},{
    name:"Sukhee",
    edad:18,
    calificacion:100

})

export const test = ()=>{
    console.log("se esta llamando al controlador desde app")
}