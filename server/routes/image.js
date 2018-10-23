const express = require('express');
const router = express.Router()
const multer = require('multer')
const fs = require('fs')
const bodyParser = require("body-parser")
const Image = require ('../database/models/image')
const User = require('../database/models/user')

router.use(bodyParser.json());

router.post('/',function(req,res,next){

    

    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, __dirname+"src/uploads")
        },
        filename: function(req, file, cb) {
            cb(null, file.originalname);
            }
      })
      var upload = multer({storage : storage}).single('image')

      upload(req,res,function(err){
          if(err){
              console.log('not uploaded',err)
              return({"ret":"sucess"})
          }
          res.send()
      })

      
      
})


router.post('/db',(req,res)=>{
    const newItem = new Image({
        path: req.body.path
    })

    newItem.save().then(item => res.json(item))
})



module.exports = router;