const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser');

//importing Movie model
const Movie = require('../../../models/Movie');

router.get('/', (req, res) => {
    Movie.find().sort({ createdAt: -1 }).then(movies => {
        res.json({ data: movies, success: true, msg: 'success' })
    }).catch(err => {
        res.json({ data: null, success: false, msg: err })
    })
})

router.get('/details/:id', (req, res) => {
    var id = req.params.id;
    Movie.findById(id).then(movies => {
        res.json({ data: movies, success: true, msg: 'success' })
    }).catch(err => {
        res.json({ data: null, success: false, msg: err })
    })
})

router.put('/:id',  (req, res) => {
    // var id = req.params.id;

    var id = req.params.id;
    console.log(req.body)
    const newData = {
        movieName: req.body.movieName,
        directorName: req.body.directorName,
        actorName: req.body.actorName,
        musicDirectorName: req.body.musicDirectorName,
        releaseDate: req.body.releaseDate,
        producerName: req.body.producerName,
        moviePoster: req.body.moviePoster,
        movieRating: req.body.movieRating,
        movieLanguage: req.body.movieLanguage,
        videoLink: req.body.videoLink
    }

Movie.findByIdAndUpdate(id,newData,{new:true})
.then(result => {
    res.json({data:result,success:true,msg:'Data updated successfully.'})
}).catch(err => {
            res.json({data:null,success:false,msg:err})
    })
    //   res.json({data:user})
    // const newData = {
    //     fname: req.body.movieName
    // }
})

router.get('/:lang', (req, res) => {
    if (req.params.lang == 'k') {
        Movie.find({
            movieLanguage: 'K'
        }).then(movies => {
            console.log(movies)
            res.json({ data: movies, success: true, msg: 'success' })
        }).catch(err => {
            res.json({ data: null, success: false, msg: err })
        })
    } else if (req.params.lang == 'e') {
        Movie.find({
            movieLanguage: 'E'
        }).then(movies => {
            res.json({ data: movies, success: true, msg: 'success' })
        }).catch(err => {
            res.json({ data: null, success: false, msg: err })
        })
    } else {
        Movie.find({
            movieLanguage: 'H'
        }).then(movies => {
            res.json({ data: movies, success: true, msg: 'success' })
        }).catch(err => {
            res.json({ data: null, success: false, msg: err })
        })
    }
})

module.exports = router;