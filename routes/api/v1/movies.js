const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser');

//importing Movie model
const Movie = require('../../../models/Movie');

router.get('/', (req, res) => {
    Movie.find().sort({
        createdAt: -1
    }).then(movies => {
        res.json({
            data: movies,
            success: true,
            msg: 'success'
        })
    }).catch(err => {
        res.json({
            data: null,
            success: false,
            msg: err
        })
    })
})

router.get('/details/:id', (req, res) => {
    var id = req.params.id;
    Movie.findById(id).then(movies => {
        res.json({
            data: movies,
            success: true,
            msg: 'success'
        })
    }).catch(err => {
        res.json({
            data: null,
            success: false,
            msg: err
        })
    })
})

router.delete('/:id', (req, res) => {
    var id = req.params.id;
    Movie.findById(id).then(user => {
        user.remove().then(movies => {
            res.json({
                data: movies,
                success: true,
                msg: 'Data deleted successfully'
            })
        }).catch(err => {
            res.json({
                data: null,
                success: false,
                msg: err
            })
        })
    }).catch(err => {
        res.json({
            data: null,
            success: false,
            msg: err
        })
    })
})

router.post('/', (req, res) => {
    const newMovie = new Movie({
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
    })
    newMovie.save().then(movie => {
        res.json({
            data: movie,
            success: true,
            msg: 'Data saved successfully'
        })
    }).catch(err => {
        console.log(err)
    })
})

router.put('/:id', (req, res) => {
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

    Movie.findByIdAndUpdate(id, newData, {
            new: true
        })
        .then(result => {
            res.json({
                data: result,
                success: true,
                msg: 'Data updated successfully.'
            })
        }).catch(err => {
            res.json({
                data: null,
                success: false,
                msg: err
            })
        })
})

router.put('/changestatus/:id', (req, res) => {
    var id = req.params.id;
    var wishList = req.params.wishList;
    console.log(req)
    console.log("------")
    console.log(res)
    const newData = {
        wishList: true
    }
    Movie.findByIdAndUpdate(id, newData, {
        new: true
    })
    .then(result => {
        res.json({
            data: result,
            success: true,
            msg: 'Data updated successfully.'
        })
    }).catch(err => {
        res.json({
            data: null,
            success: false,
            msg: err
        })
    })
})

router.get('/wishlist/:wishlist', (req, res) => {
    console.log(req)
    if (req.params.wishlist == "true") {
        Movie.find({
            wishList: true
        }).then(movies => {
            console.log(movies)
            res.json({
                data: movies,
                success: true,
                msg: 'success'
            })
        }).catch(err => {
            res.json({
                data: null,
                success: false,
                msg: err
            })
        })
    }
})

router.get('/:lang', (req, res) => {
    if (req.params.lang == 'k') {
        Movie.find({
            movieLanguage: 'K'
        }).then(movies => {
            console.log(movies)
            res.json({
                data: movies,
                success: true,
                msg: 'success'
            })
        }).catch(err => {
            res.json({
                data: null,
                success: false,
                msg: err
            })
        })
    } else if (req.params.lang == 'e') {
        Movie.find({
            movieLanguage: 'E'
        }).then(movies => {
            res.json({
                data: movies,
                success: true,
                msg: 'success'
            })
        }).catch(err => {
            res.json({
                data: null,
                success: false,
                msg: err
            })
        })
    } else {
        Movie.find({
            movieLanguage: 'H'
        }).then(movies => {
            res.json({
                data: movies,
                success: true,
                msg: 'success'
            })
        }).catch(err => {
            res.json({
                data: null,
                success: false,
                msg: err
            })
        })
    }
})

module.exports = router;