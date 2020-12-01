const express = require('express')
const app = express()
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))
app.set('view engine','ejs')
app.set('views', __dirname + '/views');
app.get('/',function(req,res){
    res.render('index.ejs')
      })
app.listen(3000,function(req,res){
        console.log('The server is running')
    })
const apikey = 'c6c30d38cf009bf578bec2302aa23248'
const api = `api.openweathermap.org/data/2.5/weather?q=London&appid=apikey`