/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this file are prefixed with `localhost:3000/reviews`
---------------------------------------------------------------------------------------
*/

/* Require modules
--------------------------------------------------------------- */
const express = require('express')
const router = express.Router();

/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models');

/* Routes
--------------------------------------------------------------- */

// New Route: GET localhost:3000/todos/new/:userId
router.get('/new/:userId', (req, res) => {
    db.User.findById(req.params.userId)
        // .then(res.send('About to add todo for user ' + req.params.userId));
        .then(user => res.render('todos/new-form', { user: user }))
});

// Create Route (POST/Create): 
// POST localhost:3000/todos/create
//This route receives the POST request sent from the new route,
// creates a new todo document using the form data, 
// and redirects the user to the User's show page
router.post('/create/:userId', (req, res) => {
    db.User.findByIdAndUpdate(
        req.params.userId,
        { $push: { todos: req.body } },
        { new: true }
    )
        .then(user => res.redirect('/users/' + req.params.userId));
        // .then(user => res.send('New Todo created for User ' + req.params.userId));
});

// Edit Route (GET/Read): This route renders a form
// the user will use to PUT (edit) properties of an existing todo
router.get('/:todoId/edit', (req, res) => {
    db.User.findOne(
        {
            'todos._id': req.params.todoId
        },
        { 'todos.$': true, _id: false}
    )
    .then(user => {
        res.send(user.todos[0]);
    });

    // db.User.findById(req.params.id)
    //     //.then(wand => console.log(wand._id.toString()));
    //     // .then(wand => res.send('You\'ll be editing user ' + wand._id.toString()));
    //     .then(user => res.render('todos/edit-form', {todo: todo}));
});

/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router;