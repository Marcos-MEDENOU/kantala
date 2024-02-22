const express = require("express");
const path = require("path")
const app = express();
app.use(express.static('css'));

//Montrer a Express.js ou se trouvent les vues
app.use("/img", express.static(path.join(__dirname, "img")));
app.set('views', path.join(__dirname, 'views'))
//Demander a express d'utiliser pug comme engin de template
app.set('view engine', 'pug')

app.get('/', (request,response)=>{
    // response.send("<h1>hello</h1>")
    response.render("index")
})
app.get('/chat', (request,response)=>{
    // response.send("<h1>hello</h1>")
    response.render("chat")
})


app.listen(3000, ()=>{
    console.log("L'\application est lancée sur http://localhost:3000" );
})