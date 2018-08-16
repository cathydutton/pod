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

// Index page - render the home page template 
app.get('/', function (req, res) {
  res.locals.componentList = tree.children
  res.render('index')
})

// About page - render the about template 
app.get('/about', function (req, res) {
  res.render('about')
})

// Cookie page - render the cookie policy template 
app.get('/cookies', function (req, res) {
  res.render('cookies')
})

// Component page - render the component list template
app.get('/component-list', function (req, res) {
  res.locals.componentList = tree.children
  res.render('component-list')
})

gulp.start('default');

// Listen to port
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('pod is running on http://localhost:' + port);
});


console.log("you are listening too port 3000")

