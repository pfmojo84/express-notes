const router = require('express').Router();
const fs = require ('fs');
const path = require ('path');
const { v4: uuidv4 } = require('uuid');

//create get request to read db.json file 
router.get('/api/notes', async (req, res) => {
    const dbJSON = await JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    res.json(dbJSON);
});

//create post route to receive new note and save on the request body and add it to the db.json file
router.post('/api/notes', (req, res) => {
    const dbJSON = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    //create body for new note
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    //push new note to be written on the db.json file
    dbJSON.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(dbJSON));
    res.json(dbJSON);
});

module.exports = router;