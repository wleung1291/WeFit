
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')


//var project = require('./routes/project');
// Example route
// var user = require('./routes/user');
//var palette = require('./routes/palette');

var faq = require('./routes/faq');
var dailies = require('./routes/dailies');
var achievements = require('./routes/achievements');
var homepage = require('./routes/homepage');
var inventory = require('./routes/inventory');
var login = require('./routes/login');
var profile = require('./routes/profile');
var profile2 = require('./routes/profile2');

var faq2 = require('./routes/faq2');
var dailies2 = require('./routes/dailies2');
var achievements2 = require('./routes/achievements2');
var homepage2 = require('./routes/homepage2');
var inventory2 = require('./routes/inventory2');
var login2 = require('./routes/login2');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
//app.use(express.favicon());
//app.use(express.logger('dev'));
app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.methodOverride());
//app.use(express.cookieParser('Intro HCI secret key'));
//app.use(express.session());
//app.use(app.router);
app.use(express.static(path.join(__dirname, 'static')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here

//app.get('/project/:id', project.projectInfo);
// Example route
// app.get('/users', user.list);
//app.get('/palette', palette.randomPalette);
app.get('/', homepage.view);
app.get('/faq', faq.view);
app.get('/profile', profile.view);
app.get('/dailies', dailies.view);
app.get('/achievements', achievements.view);
app.get('/inventory', inventory.view);
app.get('/login', login.view);
app.get('/profile2', profile2.view);

app.get('/2', homepage2.view);
app.get('/faq2', faq2.view);
app.get('/dailies2', dailies2.view);
app.get('/achievements2', achievements2.view);
app.get('/inventory2', inventory2.view);
app.get('/login2', login2.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
