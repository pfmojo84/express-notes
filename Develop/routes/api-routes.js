//establish required modules
const router = require('express').Router();
const fs = require ('fs'); //node.js file system operations
const path = require ('path'); //import from node.js for file paths
const { v4: uuidv4 } = require('uuid'); //generates unique identified

//create get request to read db.json file and implement try/catch blocks to handle potential errors when reading or writing to 'db.json' file
router.get('/api/notes', async (req, res) => {
    try {
        const dbJSON = await fs.promises.readFile('db/db.json', 'utf8'); //read and parse db.json file
        res.json(JSON.parse(dbJSON)); //send the parsed JSON data as the response
    } catch (error) {
        res.status(500).json({ error: 'Error reading db.json file' });
    }
});

//create post route to receive new note and save on the request body and add it to the db.json file
router.post('/api/notes', async (req, res) => {
    try {
        let dbJSON = await fs.promises.readFile('db/db.json', 'utf8');
        dbJSON = JSON.parse(dbJSON);

        //create new note object using data from the request body with a generated unique identified
        const newNote = {
                title: req.body.title,
                text: req.body.text,
                id: uuidv4(),
            };

            //add new note to the array of notes in the dbJSON object
            dbJSON.push(newNote);
            //write the updated dbJSON object back to the db.json file
            await fs.promises.writeFile('db/db.json', JSON.stringify(dbJSON)); 
            // send the updated dbJSON object as the response
            res.json(dbJSON); 
    } catch (error) {
        res.status(500).json({ error: 'Error writing to db.json file' });
    }
});
    

module.exports = router;