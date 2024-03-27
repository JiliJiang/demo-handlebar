const router = require('express').Router();
const fs = require('fs');
const path = require('path');

router.post('/api/users', (req, res) => {
 
    let newUser = req.body;
    const data = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf-8');
    
    let users = JSON.parse(data)
    users.push(newUser);
    

    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(users), 'utf-8');
    res.json(req.body)
    
});



module.exports = router;