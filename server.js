const express = require('express');
const hbs = require('hbs');

var app = express();
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public/'));

app.get('/', (req, res)=> {
    console.log('Inside default request');
    res.send('Hello Express');
});

app.get('/about', (req, res)=> {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currYear: new Date().getFullYear()
    });
});

app.listen(3000, ()=> {
    console.log('Server is up on port 3000');
});