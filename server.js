const express = require('express');
const bodyParser = require('body-parser');

const PORT = 4000;

const app = express();

app.use(express.json());

const posts = [ 
    {
        id: "asfafadf",
        title: "Teste Mural",
        description: "Descrição teste"
    },
    {
        id: "asfafadf",
        title: "Teste Mural",
        description: "Descrição teste"
    },
    {
        id: "asfafadf",
        title: "Teste Mural",
        description: "Descrição teste"
    },
]

app.get("/all", (req,res) =>{
    res.json(JSON.stringify(posts));
    console.log("ok");
});

app.post("/new", bodyParser.json(), (req, res) => {

        let id =generateID();
        let title = req.body.title;
        let description = req.body.tittle;

        posts.push({id, title, description});

        res.send("Post Adicionado");

});

app.listen(PORT, () =>{
    console.log(`Server Ruuning on Port:${PORT}`);
});

function generateID(){
    return Math.random().toString(36).substring(2,9);
};