const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes')
const path = require('path')
// mongo db connection
mongoose.connect(process.env.MONGODB_URI || '' ,{
    useNewUrlParser:true
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/' ,routes)


if(process.env.NODE_ENV ==='production'){
    app.use(express.static('app-front-end/build'))
    
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'app-front-end','build','index.html'))
    })
}

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))