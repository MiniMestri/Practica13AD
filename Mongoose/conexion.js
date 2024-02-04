var mongoose = require('mongoose');

const conexion = 'mongodb://127.0.0.1/bbdd'

mongoose.connect(conexion,{useNewUrlParser:true,useUnifiedTopology:true}).then(function(){
    console.log("conectado a mongo")
})