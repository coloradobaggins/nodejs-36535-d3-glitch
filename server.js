const express = require('express');
const Contenedor = require('./Classes/Contenedor.js');

const app = express();
const PORT = process.env.PORT || 8080;

const objContenedor = new Contenedor('productos.txt');


const allProducts = async (req, res)=>{

    res.send(await objContenedor.getAll());

}

const randomProducto = async (req, res)=>{

    let allProducts = await objContenedor.getAll();

    let randomIndex = Math.floor(Math.random() * allProducts.length);

    res.send(allProducts[randomIndex]);

}

//Endpoints
app.get('/productos', allProducts);
app.get('/productoRandom', randomProducto);


const server = app.listen(PORT, ()=>{

    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);

});

server.on('error', err => console.log(`Error en servidor ${err}`));