const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public')

app.set('view engine', 'ejs');

app.get('/profile', (_, resp) => {
    const user = {
        name: 'Peter',
        email: 'peter@test.com',
        country: 'USA',
        skills: ['php', 'js', 'node js', 'java', 'c++']
    }
    resp.render('profile', { user })
});

app.listen(4000);