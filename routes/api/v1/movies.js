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

//@route GET api/users/:id
//@desc  Get a single user
//@access Public
// router.get('/:id',(req,res) => {
//     var id = req.params.id;
//     Movie.findById(id).then(movies => {
//         res.json({data:movies,success:true,msg:'success'})
//     }).catch(err => {
//         res.json({data:null,success:false,msg:err})
//     })
// })

module.exports = router;