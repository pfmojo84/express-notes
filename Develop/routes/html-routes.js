//establish required modules
const router = require('express').Router(); //import the 'router' class from Express
const path = require('path'); //import the 'path' module from Node.js


//define routes using the router object 
router.get('/', (req, res) => { //define a route for the root URL '/'
    res.sendFile(path.join(__dirname,'../public/index.html')); //send index.html file 
});

router.get('/notes', (req, res) => { //define route for the '/notes' url
    res.sendFile(path.join(__dirname, '../public/notes.html')); //sends notes.html file
});

module.exports = router;