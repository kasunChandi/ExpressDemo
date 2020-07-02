const express = require('express');
const authenticater = require('./middleware/authenticater');
const emailLog = require('./middleware/emialsAuth');
const app = express();
const port =5000;


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

app.use(authenticater);

app.use(emailLog);

app.use((req,res, next) =>{

console.log("Hii");
next();
});

app.use((req,res, next ) =>{

    console.log("Hii new one");
    next();
    });




let heroArray =[{id:1 ,name:'IronMan'},{id:2 ,name:'SupperMan'},{id:3 ,name:'BatMan'}];


app.get('/',(req,res)=>{

    res.send("hello Heroes!");
});

app.get('/api/heroes',(req,res)=>{
  // let heroes =['iron-man','supper-man','bat-man'];
   res.send(heroArray);
});

app.get('/api/heroes/:HeroId',(req, res)=>{ 

   let HeroId = req.params.HeroId;
  // let optionalVal =req.query.showMore;
  let hero = heroArray.find(h=> h.id == HeroId);

  if(!hero){

    res.status(404).send("This is not our server!");
  }

res.send(hero);
//res.send("Hero id is " +HeroId);
    /*let hero = {id:'1', name:'iron man'};
res.send(hero);*/
});


app.post('/api/heroes',(req,res)=>{ 
    

    if(!req.body.heroName)
{   
 return res.status(400).send("Error of hero name ");

}

    let newHero = {
        id:heroArray.length+1,
        name: req.body.heroName
    }
heroArray.push(newHero);
console.log(heroArray);
res.send(newHero);

});

app.put('/api/heroes/:HeroId',(req,res)=>{ 
    let HeroId = req.params.HeroId;
    let hero = heroArray.find(h=> h.id === HeroId);
    if(!hero){

        return res.status(404).send("This is not our server!");
      }
      if(!req.body.heroName)
      {   
       return res.status(400).send("Error of hero name ");
      
      }

      hero.name = req.body.heroName;
      console.log(heroArray);
      res.send(hero);

});

app.delete('/api/heroes/:HeroId',(req,res)=>{
    let HeroId = parseInt(req.params.HeroId);
   let DeleteHeroID = HeroId-1;
    let hero = heroArray.find(h=> h.id === HeroId);
    if(!hero){

      return res.status(404).send("This is not our server!");
      }

//let indexOfHero = heroArray.findIndex(hero);
heroArray.splice(DeleteHeroID, 1);
console.log(heroArray);
res.send(hero);
});







app.listen(port, function(){

    console.log("lissing on port " +port);
});
