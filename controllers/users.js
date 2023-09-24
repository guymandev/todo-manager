/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this file are prefixed with `localhost:3000/users`
---------------------------------------------------------------------------------------
*/

/* Require modules
--------------------------------------------------------------- */
const express = require('express');
const router = express.Router();

/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')

/* Routes
--------------------------------------------------------------- */

// Index Route (GET/Read): Will display all wands
router.get('/', function (req, res) {
    db.User.find({})
        .then(users => {
            res.render('users/user-index', {
                users: users
            })
            // res.send(users);
        })
    // res.send('User index');
});

// Show Route (GET/Read): Will display an individual wand document
// using the URL parameter (which is the document _id)
router.get('/:id', function (req, res) {
    db.User.findById(req.params.id)
        .then(user => {
            res.render('users/user-details', {
                user: user
            });
            // res.send(user);
        })
        .catch(() => res.send('404 Error: Page Not Found'))
});

// Create Route (POST/Create): This route receives the POST request sent from the new route,
// creates a new User document using the form data, 
// and redirects the user to the new User's show page
router.post('/create', (req, res) => {
    //console.log(req.body);
    db.User.create(req.body)
        //.then(wand => res.json(wand));
        // .then(user => res.redirect('/user/' + user._id.toString()));
        .then(user => res.send('User ' + user._id.toString() + ' created'));
});

// Edit Route (GET/Read): This route renders a form
// the user will use to PUT (edit) properties of an existing wand
router.get('/:id/edit', (req, res) => {
    db.User.findById(req.params.id)
        //.then(wand => console.log(wand._id.toString()));
        .then(wand => res.send('You\'ll be editing user ' + wand._id.toString()));
        // .then(user => res.render('edit-form', {user: user}));
});

/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router;
