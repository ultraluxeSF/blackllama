//Express server
import express from "express";

import data from "./data.js";

const app = express();


//import products
app.get('/api/products', (req, res) => {
    res.send(data.products);
})


app.get('/api/products/:id', (req, res) => {
    const tshirt = data.products.find((x) => x._id === req.params.id);
    if (tshirt) {
        res.send(tshirt);
    } else {
        res.status(404).send({ message: 'Product Not Found :(' });
    }
})



//respond message
app.get('/', (req, res) => { //handler
    res.send('Server is ready');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});

