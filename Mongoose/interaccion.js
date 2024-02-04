var mongoose = require('mongoose');

const conexion = 'mongodb://127.0.0.1/bbdd'

const formularioSchema = new mongoose.Schema({
    fecha:String,
    mes:String,
    dia:String,
    hora:String,
    minuto:String,
    segundo:String
})

const Registro = mongoose.model("conexion",formularioSchema)

var fecha = new Date()
const NuevoRegistro = new Registro({
    fecha:fecha.getFullYear(),
    mes:fecha.getMonth()+1,
    dia:fecha.getDate(),
    hora:fecha.getHours(),
    minuto:fecha.getMinutes(),
    segundo:fecha.getSeconds()
})
mongoose.connect(conexion,{useNewUrlParser:true,useUnifiedTopology:true}).then(function(){
    console.log("conectado a mongo")
    NuevoRegistro.save()
        .then(function(){
            console.log("Insertado")
        })
})
