const express = require ('express') //carga express en la variable express
const app = express (); // permite configurar y manejar rutas
//creo un servidor
app.get('/', (req, res) => { // configura una ruta usando express.js
    res.send('¡Hola todo biiiieeeeen!');//me debuelve diciendo hola todo biiiieeeeen
});
//defino el puerto
const puerto = 3000;
//guardo el puerto
app.listen (puerto = () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}/`);
});
//guardo el servidor