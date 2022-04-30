//Express server
import express from "express";

import data from "./data.js";

const app = express();

//import products
app.get('/api/tshirts', (req, res) => {
    res.send(data.tshirts);
})
app.get('/api/hoodies', (req, res) => {
    res.send(data.hoodies);
})
app.get('/api/cases', (req, res) => {
    res.send(data.cases);
})
app.get('/api/pins', (req, res) => {
    res.send(data.pins);
})
app.get('/api/posters', (req, res) => {
    res.send(data.posters);
})
app.get('/api/mugs', (req, res) => {
    res.send(data.mugs);
})


//respond message
app.get('/', (req, res)=> { //handler
    res.send('Server is ready');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});

