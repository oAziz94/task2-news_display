const request = require('request')
const path = require('path')
const hbs = require('hbs')
const port = 3000
const newsurl = 'http://newsapi.org/v2/top-headlines?country=eg&apikey=1fa487afb07c4e5b86461c21595db9d7'
const express = require('express')
const app = express()
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../tempates/views')
const partialsPath = path.join(__dirname, '../tempates/partials')

hbs.registerPartials(partialsPath)

app.use(express.static(publicDir))
app.set('view engine', 'hbs')
app.set('views', viewsPath)

request({url:newsurl, json:true}, (error,response)=>{
    const news = response.body.articles
    console.log('success')
    app.get('', (req,res)=>{
        res.render('index', {news:news})
    })
})

app.listen(port, () => console.log('Listening on server 3000'))