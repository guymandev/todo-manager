# TODO MANAGER
MEN stack application demonstrating use of 7 restful routes for CRUD operations

### Screenshot



### Technologies used

* Express
* ejs
* Mongoose
* Method-override
* dotenv

### Developer Utilities

* livereload
* connect-livereload

### CRUD Table

![CRUD table](/public/assets/Todo-Manager-CRUD-routes.jpg "CRUD table")

### Installation Instructions

#### Run the following:

* npm init -y
* npm i express ejs mongoose livereload connect-livereload dotenv method-override 

#### Add the following to the .gitignore file

* node_modules
* .env

#### Add the following utility developer scripts to the scripts section of the package.json file:

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js -e css,ejs,js,json"
  }
```
### User stories

* As a user, I want to create my user profile so that I can begin using the tool.
* As a user, I want to modify my user profile, as my personal details change.
* As a user, I want to delete my user profile.
* As a user, I want to see my user page and all of my todos listed.
* As a user, I want to create a todo.
* As a user, I want to edit a todo.
* As a user, I want to delete a todo.

### Wireframes

![Home page](/public/assets/IMG_6577.jpg "Home page")\
![User Index](/public/assets/IMG_6578.jpg "User Index")\
![New User](/public/assets/IMG_6579.jpg "New User")\
![Edit User](/public/assets/IMG_6580.jpg "Edit User")\
![User Details](/public/assets/IMG_6581.jpg "User Details")\
![New ToDo](/public/assets/IMG_6582.jpg "New ToDo")\
![Edit ToDo](/public/assets/IMG_6583.jpg "Edit ToDo")\

### Screenshots

![Home page](/public/assets/Home-page.jpg "Home page")\
![User Index](/public/assets/user-index.jpg "User Index")\
![New User](/public/assets/create-user.jpg "New User")\
![Edit User](/public/assets/edit-user.jpg "Edit User")\
![User Details](/public/assets/user-detail.jpg "User Details")\
![New ToDo](/public/assets/create-todo.jpg "New ToDo")\
![Edit ToDo](/public/assets/edit-todo.jpg "Edit ToDo")\

### Learnings

1. I learned how to style an anchor or input tag to look like a button, complete with hover effects. I also learned how to make a mini-form, for use in submitting form POSTS (to be later overriden for PUT and DELETE). 
    1. HTML
        1. From user-index.ejs, using an input element.
        ```
        <div class="users-buttons-group"> 
            <a class="button" href="/users/<%=user._id%>/edit">Edit</a> 
            <form method="POST" action="/users/<%= user._id %>/delete?_method=DELETE"> 
                <input class="delete-button" value="Delete" type="submit"/> 
            </form>                         
        </div> 
        ```
        2. From user-details.ejs, using an actual button element.
        ```
        <div class="users-buttons-group">
            <a class="button" href="/todos/<%= todo._id %>/edit">Edit</a> 
            <form method="POST" action="/todos/<%= todo._id %>/delete?_method=DELETE"> 
                <button class="delete-button" type="submit">Delete</button> 
            </form>
        </div> 
        ```
    2. CSS
        ```
        /* Styling pertaining to the buttons for each user row */ 
        .users-buttons-group { 
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 200px;
            height: 100%; 
        } 

        .button {
            display: inline-block;
            padding: 10px 20px;
            width: 50px;
            text-align: center;
            text-decoration: none;
            vertical-align: auto;
            color: #ffffff;
            background-color: #7aa8b7;
            border: 1px solid black;
            border-radius: 6px;
            outline: none;
            transition: 0.3s;
        } 
        .button:hover {
            background-color: #c2c7c7;
        } 
        
        /* The below stylings pertain to the delete "button" which uses an input element styled to look like a button. Adjusting the form height/width is required to make the "button" the same size as a styled "button" anchor tag.*/ 

        form {
            width: 92px;
            height: 40px;
        }
        .delete-button {
            display: inline-block;
            font-size: 16px; 
            height: 100%;
            width: 100%;
            text-align: center; 
            text-decoration: none; 
            vertical-align: auto;
            color: #ffffff;
            background-color: #7aa8b7;
            border: 1px solid black;
            border-radius: 6px; 
            outline: none;
            transition: 0.3s;
        } 
        .delete-button:hover {
            background-color: #c2c7c7;
        } 
        ```
2. I learned the difference between render and redirect.
    1. Render looks in the view folder (which has been configured in server.js), and so it does not need a full path. 
    2. Redirect requires a full valid path to the file being rendered. 
3. I discovered that I could add a method to a Mongoose schema, and then make use of it in my EJS files. 
    1. todo.js
    ```
    // Define a schema method for date formatting 
    todoSchema.methods.formatDate = function(dateProperty) { 
    const newDate = new Date(this[dateProperty]);
    let formattedDate = `${ `0${ newDate.getMonth() + 1 }`.slice(-2) }/`;
        formattedDate += `${ `0${ newDate.getDate() }`.slice(-2) }/`;
        formattedDate += `${ newDate.getFullYear() }`; 
    return formattedDate; 
    ```
    2. views/todos/edit-form.ejs
    `value="<%= todo.formatDate('dueDate') %>"` 