
log = (req, res , next) =>{
   console.log('Authentication user.......');
   next();
    
};

module.exports =log;