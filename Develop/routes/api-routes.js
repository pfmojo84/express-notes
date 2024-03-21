const router = require('express').Router();
const fs = require ('fs');
const path = require ('path');
const { v4: uuidv4 } = require('uuid');

//create get request to read db.json file 
router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

//create post route to receive new note and save on the request body and add it to the db.json file
router.post('/api/notes', (req, res) => {
    let db = fs.readFileSync('db/db.json');
    db = JSON.parse(db);
    res.json(db);
    //create body for new note
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    //push new note to be written on the db.json file
    db.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);
});

module.exports = router;