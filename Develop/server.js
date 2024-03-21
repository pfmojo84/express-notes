//establish 'express' dependency
const express = require ('express');
const htmlRoutes = require('./routes/html-routes');
const apiRoutes = require('./routes/api-routes');

//create environment variable port
const PORT = process.env.port || 3001;

//triggers express built in method(s) -- double check accuracy
const app = express();

//set middleware for parsing json and url-encoded data
app.use(express.urlencoded({ extended: false})); //clarification needed
app.use(express.json());
app.use(express.static('public'));
app.use(htmlRoutes);
app.use(apiRoutes);

//app listener - initiates the server
app.listen(PORT, () => {
    console.log(`Server running at localhost:${PORT}`);
});