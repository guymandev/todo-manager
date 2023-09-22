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

![CRUD table](/public/assets/Todo-Manager-CRUD-routes.jpg "CRUD table")\

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