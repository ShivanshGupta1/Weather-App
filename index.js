const express = require('express');
const request = require('request');
const app = express();
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', { weather: null, error: null })

});
app.listen(3000, () => {
    console.log("server ")
})


app.post('/', (req, res) => {
    let city = req.body.city_name
    let apikey = 'e553741d54dc7d56afe2e89648cb44c2'
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    request(url, function (error, response, body) {
        if (error) {
            res.render('index', { weather: null, error: 'Error Please try again' })
        }
        else {
            weather = JSON.parse(body);
             console.log(w)



            res.render('index', { weather: weather, error: null })
        }
    });

})