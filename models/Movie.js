const mongoose = require("mongoose")
const Schema = mongoose.Schema;
var MovieSchema = new Schema({
    movieName : {
        type : String,
        required : "Movie Name is required"
    },
    directorName : {
        type : String,
        required : "Director Name is required"
    },
    actorName : {
        type : String,
        required : "Actor Name is required"
    },
    musicDirectorName : {
        type : String,
        required : "Music Director Name is required"
    },
    releaseDate : {
        type : String,
        required : "Release Date is required"
    },
    producerName : {
        type : String,
        required : "Producer Name is required"
    },
    moviePoster : {
        type : String,
        required : "Movie Poster is required"
    },
    movieRating : {
        type : String,
        required : "Movie Poster is required"
    },
    videoLink : {
        type : String,
        required : "Video Link is required"
    },
    movieLanguage : {
        type : String,
        required : "Movie Language is required"
    },
    wishList : {
        type : Boolean,
        required : "Movie Language is required"
    }
},
{
   timestamps: true 
}
)
module.exports = Movie = mongoose.model('movies' , MovieSchema);