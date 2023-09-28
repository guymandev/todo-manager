/* Require modules
--------------------------------------------------------------- */
require('dotenv').config();
const path = require('path');
const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const methodOverride = require('method-override'); 

/* Require the db connection, models, and seed data 
--------------------------------------------------------------- */
const db = require('./models'); 


/* Require the routes in the controllers folder
--------------------------------------------------------------- */  
const usersCtrl = require('./controllers/users'); 
const todosCtrl = require('./controllers/todos');

/* Create the Express app
--------------------------------------------------------------- */
const app = express();

/* Configure the app to refresh the browser when nodemon restarts
--------------------------------------------------------------- */ 
// const liveReloadServer = livereload.createServer();
// liveReloadServer.server.once("connection", () => {
//     // wait for nodemon to fully restart before refreshing the page
//     setTimeout(() => { 
//         liveReloadServer.refresh("/");
//     }, 100);
// }); 

// Detect if running in a dev environment
if (process.env.ON_HEROKU === 'false') {
    // Configure the app to refresh the browser when nodemon restarts
    const liveReloadServer = livereload.createServer();
    liveReloadServer.server.once("connection", () => {
        // wait for nodemon to fully restart before refreshing the page
        setTimeout(() => {
        liveReloadServer.refresh("/");
        }, 100);
    });
    app.use(connectLiveReload());
};

/* Configure the app (app.set)
--------------------------------------------------------------- */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
 

/* Middleware (app.use)
--------------------------------------------------------------- */
app.use(express.static('public'));
// Comment out the connectLiveReload, because it's now happeing
// above.
// app.use(connectLiveReload());

// Body parser: used for POST/PUT/PATCH routes:
// this will take incoming strings from the body that are URL encoded and parse them  
// into an object that can be accessed in the request parameter as a property called body (req.body). 
app.use(express.urlencoded({ extended: true }));
// Allows us to interpret POST requests from the browser as another request type: DELETE, PUT, etc. 
app.use(methodOverride('_method')); 

/* Mount routes
--------------------------------------------------------------- */ 

// HOME Route
app.get('/', function (req, res) {
    res.render('home');
}); 


// This tells our app to look at the `controllers/wands.js` file 
// to handle all routes that begin with `localhost:3000/wands`
app.use('/users', usersCtrl);
// This tells our app to look at the `controllers/wands.js` file 
// to handle all routes that begin with `localhost:3000/wands`
app.use('/todos', todosCtrl);

/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
}); 