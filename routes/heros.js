const express = require('express');
const router = express.Router();



let heroArray =[
    {id:1 ,name:'IronMan'},
    {id:2 ,name:'SupperMan'},
    {id:3 ,name:'BatMan'}
];



router.get('/',(req,res)=>{
    // let heroes =['iron-man','supper-man','bat-man'];
     res.send(heroArray);
  });
  
  router.get('/:HeroId',(req, res)=>{ 
  
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
  
  
  router.post('/',(req,res)=>{ 
      
  
      if(!req.body.heroName){   
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
  
  
  