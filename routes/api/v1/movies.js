const express = require('express')
const router = express.Router();

//importing Movie model
const Movie = require('../../../models/Movie');

router.get('/',(req,res) => {
    Movie.find().sort({createdAt:-1}).then(movies => {
        res.json({data:movies,success:true,msg:'success'})
    }).catch(err => {
        res.json({data:null,success:false,msg:err})
    })
})

router.get('/details/:id',(req,res) => {
    var id = req.params.id;
    Movie.findById(id).then(movies => {
        res.json({data:movies,success:true,msg:'success'})
    }).catch(err => {
        res.json({data:null,success:false,msg:err})
    })
})

router.get('/:lang',(req,res) => {
    if(req.params.lang == 'k'){
        Movie.find({
            movieLanguage : 'K'
        }).then(movies => {
            console.log(movies)
            res.json({data:movies,success:true,msg:'success'})
        }).catch(err => {
            res.json({data:null,success:false,msg:err})
        })
    } else if (req.params.lang == 'e') {
        Movie.find({
            movieLanguage : 'E'
        }).then(movies => {
            res.json({data:movies,success:true,msg:'success'})
        }).catch(err => {
            res.json({data:null,success:false,msg:err})
        })
    } else {
        Movie.find({
            movieLanguage : 'H'
        }).then(movies => {
            res.json({data:movies,success:true,msg:'success'})
        }).catch(err => {
            res.json({data:null,success:false,msg:err})
        })
    }

})

module.exports = router;