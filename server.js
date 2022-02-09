const express = require('express');
const path = require("path");
const apiRoute = require('./routes/routes');

const PORT = 4000;

const app = express();

app.use(express.json());

app.use('/api', apiRoute);

app.use('/', express.static(path.join(__dirname, "public")));

app.listen(PORT, () =>{
    console.log(`Server Ruuning on Port:${PORT}`);
});