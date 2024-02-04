//Eliminar un solo registro con el criterio seleccionado
db.datosRegistro.deleteOne({asunto:"Asunto2"});

//Eliminar varios registros con el criterio seleccionado
db.datosRegistro.deleteMany({nombre:"Veronica"});