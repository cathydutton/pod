const express = require('express');
const nunjucks = require('nunjucks');
const componentController = require('./controllers/componentController');
const helperFunctions = require('./helpers/helper-functions.js')
const app = express();

// Compile component list
const dirTree = require('directory-tree');
const tree = dirTree('views/components/', {extensions:/\.txt$/}, (item, PATH) => {
});

// Set view engine
nunjucks.configure('views', {
  autoescape: true, // output with dangerous characters are escaped automatically
  express: app, // the express app that nunjucks should install to
  noCache: true, // never use a cache and recompile templates each time
  trimBlocks: true, // automatically remove trailing newlines from a block/tag
  lstripBlocks: true, // automatically remove leading whitespace from a block/tag
  watch: true // reload templates when they are changed. needs chokidar dependency to be installed
})

app.set('view engine', 'njk')

// Static files
app.use(express.static('./public'));

// Fire controllers
componentController(app);

// Index page - render the component list template from dist folder
app.get('/', function (req, res) {
  res.locals.componentList = tree.children
  res.render('index')
})


// Listen to port
app.listen(3000);

console.log("you are listening too port 3000")

