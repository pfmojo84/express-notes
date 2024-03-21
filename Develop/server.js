//establish 'express' dependency
const express = require ('express');
const htmlRoutes = require('./routes/html-routes');
const apiRoutes = require('./routes/api-routes');

//triggers express built in method(s) -- double check accuracy
const app = express();

//create environment variable port
const PORT = process.env.port || 3001;


//set middleware for parsing json and url-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true})); //clarification needed
app.use(express.static('public'));
app.use(htmlRoutes);
app.use(apiRoutes);

//app listener - initiates the server
app.listen(PORT, () => {
    console.log(`Server running at localhost:${PORT}`);
});