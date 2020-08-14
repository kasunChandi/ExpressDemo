const express = require('express');
const homeHero = require('./routes/home')
const users = require('./routes/users');
const heros = require('./routes/heros');
const mongoose = require('mongoose');
const cors = require('cors');
//const authenticater = require('./middleware/authenticater');
//const emailLog = require('./middleware/emialsAuth');
const app = express();
const port = process.env.port || 5000;


/*
app.get("/", (req,res)=>{

    res.send("Hello world11");

});

app.get("/second", (req,res)=>{
   var dog =['d1','d2']
    res.send(dog);

  
});
app.get("/third", (req,res)=>{
    
     var dog2 ={ a:'no1', b:'no2'};
     res.send(dog2);
 
 });
 

 functionname = (para1 ,para2) =>{
     //code
 }

 */
app.use(express.json());

//app.use(authenticater);

//app.use(emailLog);
app.use(cors());
app.use('/api/heroes',heros);
app.use('/',homeHero);
app.use('/api/login' , users);
mongoose
.connect("mongodb+srv://user:user123@cluster0.s3e5l.mongodb.net/herodb?retryWrites=true&w=majority",
{useNewUrlParser:true , useUnifiedTopology: true})
.then(()=>console.log("connetion is success"))
.catch(err=> console.log("connection error ", err));


/*
app.use((req,res, next) =>{

console.log("Hii every one");
next();
});
app.use((req,res, next ) =>{

    console.log("Hii new one");
    next();
    });
let heroArray =[{id:1 ,name:'IronMan'},{id:2 ,name:'SupperMan'},{id:3 ,name:'BatMan'}];

*/




app.listen(port, function(){

    console.log("lissing on port " +port);
});
