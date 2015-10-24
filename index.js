var express = require('express');
var exphbs  = require('express-handlebars');
var http = require('http');
var cloudinary = require('cloudinary');
var request = require('request');
var fs = require('fs');
var Tumblr = require('tumblrwks');
 
var routes = require('./routes/index');


var app = express();



app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/', routes);



app.listen(3000);

//CAAUrfH94vLABAEcXD4RQZBOru7xjt7PpvC0mUZBDB4EkAvjPkFRdJSTsksW3VYF8IbMFLg6UOZCocyvvEHCO9yLKDUHuQud0LeEpykAicrSCe3tlzs9ZCP2I0vEwkdZAOpJB4VwEM5vSPb7C9gdUZCg0ig8PG5vpyEcumXDdozvOZA99ktOUv8c
