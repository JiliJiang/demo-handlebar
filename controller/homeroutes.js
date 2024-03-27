const router = require('express').Router();
const fs = require('fs');
const path= require('path');


router.get('/', (req, res) => {

const data = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf-8');

let users =  JSON.parse(data);

res.render('home', {users});
});


router.get('/register', (req, res) => {
    res.render('register');
})

module.exports = router;