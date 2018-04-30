const bodyParser = require('body-parser');
const helperFunctions = require('../helpers/helper-functions.js')

module.exports = function(app) {

  var urlencodedParser = bodyParser.urlencoded({extended: false});

  app.get('/components*', function (req, res, next) {
    let path = req.params[0].slice(1).split('/')
    let componentData
    let componentNameCapitalized = helperFunctions.capitaliseComponentName(path[0])
    res.locals.componentData = componentData  // make it available to the nunjucks template to loop over and display code
    res.locals.componentPath = path[0]
    res.render('components/' + path[0] + '/' + 'index')  
  })

};
