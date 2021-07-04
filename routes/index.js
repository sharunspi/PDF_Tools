const express = require('express')
const route = express.Router()

route.get('all',(req,res)=>{
    
    res.send('res')
})

module.exports = route