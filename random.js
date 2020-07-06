
function demoAsyncTest(){
   // console.log(" 1: before reading movie Data");
 return new Promise((resolve , reject) =>{

    setTimeout( () => { 
      //console.log("Execution after 4seconds");
        console.log("2: movie Data");
   let dbdata = {id : 30 , name :'Avengers :EndGame'};  
    resolve(dbdata);
    
    }, 4000);

 })

//console.log(" 3 : after reading movie Data");
}

/*----get values usign Promises----------

demoAsyncTest().then((result) =>{ 
    let movieData2 = result;
    console.log("move new data is " +movieData2);   

    console.log(movieData2);
}) */


/*----  asyncawait   ----*/
async function DisplayMovieData(){
let moveAdta3 =  await demoAsyncTest();
console.log(moveAdta3);

}

DisplayMovieData();
 //let moveDataDB = demoAsyncTest();

 //console.log("3 : movie data is " +moveDataDB);
console.log(" 4 : after  call run another one ");