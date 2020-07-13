const express = require('express');
const router = express.Router();
const Hero = require('../models/hero')


let heroArray =[
    {id:1 ,name:'IronMan'},
    {id:2 ,name:'SupperMan'},
    {id:3 ,name:'BatMan'}
];



router.get('/',async(req,res)=>{
    // let heroes =['iron-man','supper-man','bat-man'];
   //  res.send(heroArray);

     let heros = await Hero.find();
     res.send(heros);

  });
  
  router.get('/:HeroId',async(req, res)=>{ 
  /*
     let HeroId = req.params.HeroId;
    // let optionalVal =req.query.showMore;
    let hero = heroArray.find(h=> h.id == HeroId);
  */

  let hero =await Hero.findById(req.params.HeroId)
    if(!hero){
  
      res.status(404).send("This is not our server!");
    }
  
  res.send(hero);
  //res.send("Hero id is " +HeroId);
      /*let hero = {id:'1', name:'iron man'};
  res.send(hero);*/
  });
  
  
  router.post('/',async(req,res)=>{ 
      
  
      if(!req.body.heroName){   
   return res.status(400).send("Error of hero name ");
  
  }
try{
    let heroTobeAddToDb = new Hero({
     name: req.body.heroName,
     birthname: req.body.birthname,
     movies: req.body.moviesName,
     likeCount:req.body.likeCount,
     imgUrl:req.body.imgUrl,
     deceased: req.body.deceased



});

      heroTobeAddToDb = await heroTobeAddToDb.save();
      console.log(heroTobeAddToDb);
      res.send(heroTobeAddToDb);
}
catch(e){
  return res.status(500).send(e.message);
}
  /*
      let newHero = {
          id:heroArray.length+1,
          name: req.body.heroName
      }
  heroArray.push(newHero);
  console.log(heroArray);  */
  
  
  });
  
  router.put('/:HeroId',(req,res)=>{ 
      let HeroId = req.params.HeroId;
      let hero = heroArray.find(h=> h.id == HeroId);
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
  
  router.delete('/:HeroId',(req,res)=>{
      let HeroId = parseInt(req.params.HeroId);
    // let DeleteHeroID = HeroId-1;
      let hero = heroArray.find(h=> h.id === HeroId);
      if(!hero){
  
        return res.status(404).send("This is not our server! ");
        }
  
  let indexOfHero = heroArray.indexOf(hero);
  heroArray.splice(indexOfHero, 1);
  console.log(heroArray);
  res.send(hero);
  });

  module.exports = router;
  
  
  