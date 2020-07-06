
let p = new Promise(function(resolve , reject){ 

    setTimeout(function(){

        resolve("Success");
      // reject("Some thing went wrong!");

    }, 3000);

})

p.then(function(result){ 
    console.log(result);
}).catch(function (error){ 
    console.log("Error :" +error );
})