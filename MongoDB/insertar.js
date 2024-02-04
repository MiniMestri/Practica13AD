//Insertar un solo elemento 
db.datosRegistro.insertOne({
    nombre:"Alfonso",
    asunto:"Asunto1",
    mensaje:"Primer mensaje",
    fecha:"2000-02-3"
});


//Para insertar varios
db.datosRegistro.insertMany([{
    nombre:"Pilar",
    asunto:"Asunto2",
    mensaje:"Segundo mensaje",
    fecha:"2025-01-24"
},
                          {
    nombre:"Roberto",
    asunto:"Asunto3",
    mensaje:"Tercer mensaje",
    fecha:"2009-05-15"
},
                          {
    nombre:"Lali",
    asunto:"Asunto4",
    mensaje:"Cuarto mensaje",
    fecha:"2021-10-15"
}]);