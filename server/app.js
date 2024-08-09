const express = require('express');
const app = express();
const path = require('path');
app.listen(5002, () => {
    console.log('Your server is running on 5002');
})
const data = {
    language: '',
    ratings: '',
    tools: '',
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/home', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
})

app.post('/postLanguage', function (req, res, next) {
    console.log(req.body);
    data.language = req.body.language;
    res.redirect("/skills");
})


app.get('/skills', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', data.language === 'java' ? 'java.html' : 'javascript.html'));
})

app.post('/postSkill', function (req, res, next) {
    console.log(req.body);
    data.ratings = req.body.ratings;
    data.tools = req.body.tools;
    res.redirect("/preview");
})


app.get('/preview', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
})
app.get('/list', (req, res, next) => {
    res.json(data);
})