//Buscar el registro con el criterio seleccionado y lo modifica con lo codificado, pero solo el primer registro que ese encuentre
db.datosRegistro.updateOne({asunto:"Este es el primer correo"},{$set:{fecha:"2023-08-30"}});

//Buscar todos los registros con el criterio seleccionado y lo modifica
db.datosRegistro.updateMany({},{$set:{fecha:"2023-08-30"}});

