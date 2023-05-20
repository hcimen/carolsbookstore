// STEP 1: Before you start: take a look at the code below to get a feel for what it does. 

// STEP 2: In your terminal install the dependencies simply by typing in npm install. This will install the needed dependencies (express and ejs) and dev dependencies (morgan and nodemon) for this project. 
    // Note that you do NOT have to do npm init because cloning this project brings in the package.json file that's usually created through the npm init.  

// STEP 3: In the views/pages folder, change the file type of the html files to ejs files by replacing .html with .ejs for all files.

// STEP 4: Follow the directions below in the commented code to complete the rest of this assignment. 
const express = require('express');
const app = express();
const PORT = 3000;

// STEP 5: Require the built-in Node module 'path'
const morgan = require('morgan'); 
app.use(morgan('combined'));

// STEP 6: Set the view engine to 'ejs'
app.set('view engine', 'ejs'); 

// STEP 7: Set up the path to static assets with express.static() method, which takes path.join() as it's argument - note that path.join() expects 2 arguments
const path = require('node:path');
app.use(express.static(path.join(__dirname, 'public')));

//Step 8: In the views/pages folder, go to each of the files to update lines 13. 
    // Line 13 will need to be a <link> tag where the href attribute leads to the style.css file in the public/css folder. 
    // Do this for all files in the views/pages folder. Note that you may not be able to see changes in your browser until you complete steps 9 and 10 below. 

app.use(morgan('combined'));

// Variables to be used in EJS files.
let userName = 'CodeSquader';
let date = new Date();
let year = date.getFullYear();

// Routes 
// STEP 9: Convert these GET routes so that they use the response.render method to render the correct ejs files from the views/pages folder. Pass in the userName variable and the year variable so that their values can be imported into the ejs pages being rendered. 

// Step 10: For each route, go to the ejs page in the views/pages folder and use userName and the year values being passed in through the route. The userName should diplay in the header section on the homepage, and the year should display in the footer of all files. 
/* app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/pages/index.html');
}); */

app.get('/', (request, response) => {
    response.render('pages/index', {
        name:userName,
        year:year,
    } );
});

/* app.get('/books', (request, response) => {
    response.sendFile(__dirname + '/views/pages/books.html');
}); */

app.get('/books', (request, response) => {
    response.render('pages/books');
});

/* app.get('/authors', (request, response) => {
  response.sendFile(__dirname + '/views/pages/authors.html');
}); */

app.get('/authors', (request, response) => {
    response.render('pages/authors');
  });

//Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});