
const mongoose = require('mongoose');


const heroSchema = new mongoose.Schema ({

    name: {
      type :String,
      minlength : 4,
      maxlength : 25,
      required : true
    } ,
    birthname: String,
    movies: {
    type: [String],
    enum:["endGame" , "Iron man2", "The First Avenger"]
    },
    likeCount:Number,
    imgUrl:{
    type : String,
    default : "img need to add"

    },
    deceased: Boolean

});

const Hero = mongoose.model("Hero", heroSchema);

module.exports = Hero;


