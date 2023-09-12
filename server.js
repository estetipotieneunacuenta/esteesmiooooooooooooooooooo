const express = require("express"); //carga express en la variable express
const app = express(); // permite configurar y manejar rutas
//creo un servidor
app.get("/", (req, res) => {
  // configura una ruta usando express.js
  res.send("¡Hola todo biiiieeeeen!"); //me debuelve diciendo hola todo biiiieeeeen
});
//defino el puerto
const puerto = 3000;
//guardo el puerto
app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}/`);
});
//guardo el servidor

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://rmagueroorellano:elneroelmasoscuron@cluster0.fc6pg2c.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
