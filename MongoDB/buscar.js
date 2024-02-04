//Encontrar un elemento, devolverá toddos los documentos presentes en la colección
db.datosRegistro.find();

//Encontrar un solo elemento de la colección, devolverá el primer documento que cumpla con los criterios
db.datosRegistro.findOne();

//Encontrar los elementos con el criterio establecido
db.datosRegistro.find({asunto:"Asunto2"});