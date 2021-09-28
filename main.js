//Importa pg:
const {Client} = require("pg");

//Objeto con los datos de autenticacion para entrar a base de datos:
const config = {

    user: "postgres",
    host: "localhost", 
    database: "estudiante", 
    password: "postgres", 
    port: "5432,"
}

// nuevo cliente y conexion:
const cliente = new Client(config);

cliente.connect()

//Prueba la conexion con pg mostrando fecha:
/* cliente.query("SELECT NOW()", (err, res)=>{
    console.log(res)
    cliente.end()
}) */

// Funcion asincrona para consultar toda la data:
async function consulta(){
    const res = await cliente.query("SELECT * from estudiantes")
    console.log(res)
    cliente.end()
}
consulta()

// Funcion asincrona para registrar un nuevo estudiante:
async function ingresar(){
    const res = await cliente.query("INSERT INTO estudiantes (id, nombre, rut, curso, nivel) values (4, 'Flor', '44.444.444-4', 'musica', 4) RETURNING *;")
    console.log(res)
    cliente.end()
}
ingresar()

// Funcion asincrona para modificar un estudiante:
async function modificar(){
    const res = await cliente.query("UPDATE estudiantes SET nombre ='Ricardo' WHERE id= 1 RETURNING *;")
    console.log(res)
    cliente.end()
}
modificar()

// Funcion asincrona para consultar un estudiante por su rut:
async function consultarut(){
    const res = await cliente.query("SELECT * from estudiantes WHERE rut='22.222.222-2'")
    console.log(res)
    cliente.end()
}
consultarut()

// Funcion asincrona para eliminar un estudiante:
async function eliminar(){
    const res = await cliente.query("DELETE FROM estudiantes WHERE id= 4 RETURNING *;")
    console.log(res)
    cliente.end()
}
eliminar()