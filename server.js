//establish 'express' dependency
const express = require ('express');
const htmlRoutes = require('./routes/html-routes');
const apiRoutes = require('./routes/api-routes');

//triggers express built in method(s)
const app = express();

//set up middleware functions using app.use()
app.use(express.urlencoded({ extended: false})); //extended: false indicates that the URL-encoded data will be parsed with the built-in node.js 'querystring' library
app.use(express.json()); //middleware for parsing JSON data
app.use(express.static('public')); // Middleware for serving static files in public directory

app.use("/", htmlRoutes); //middleware for handling html routes defined in 'html-routes.js'

app.use("/api", apiRoutes); //middleware for handling api routes defined in 'api-routes.js'

//create environment variable port
const PORT = process.env.PORT || 3001;

//app listener - initiates the server
//base url localhost:3001/
app.listen(PORT, () => {
    console.log(`Server running at localhost:${PORT}`);
});