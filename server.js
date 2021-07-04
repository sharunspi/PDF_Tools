const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 4023
const routes = require('./routes')
const path = require('path')
const logger = require('morgan')
// mongo db connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:4dm1nofPDF@pdf.ikxdt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' ,{
    useNewUrlParser:true
}).then(res=>{
    console.log('connected to mongo db server')
}).catch(err=>{
    console.log(err)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(logger('dev'))
app.use('/' ,routes)



if(process.env.NODE_ENV ==='production'){
    app.use(express.static('app-front-end/build'))
    
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'app-front-end','build','index.html'))
    })
}

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on ${port}`))