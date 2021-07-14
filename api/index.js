//dependencias instaladas express

const express = require("express");
const morgan = require("morgan")
const PORT = 3001;
const app = express();

// seteo los headers
//parcear json de forma correcta
app.use(express.urlencoded({extended : true, limit: "50mb"}))
//para que tome los json 
app.use(express.json({limit : "50mb"}))
//dar un output en consola cada ves que se realiza una request
app.use(morgan("dev"))
app.use((req,res, next)=>{
    res.header("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header("Access-Control-Allow-Credentials", true)
    res.header("Acces-Control-Allow-Headers", "Origin, X-Requested-Whit, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
    next()
})

//setear rutas
app.get("/iecho",(req,res)=>{ 
    const{text} = req.query;
    let invertedText = "";
    if(text){
        for(let i = text.length-1; i>=0; i--){
            invertedText += text[i];
        }
         res.status(200).json({text: invertedText}) 
    }
    else {
        res.status(422).json({
            error: "no text",
          });
    }
})
//server.lister
app.listen(PORT,()=>{
    console.log(`El servidor esta escuchando en el puerto ${PORT}`)
})