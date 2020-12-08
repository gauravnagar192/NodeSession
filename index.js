var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
//app.use(session({secret: "Shh, its a secret!"}));
app.use(session({
    key: 'user_sid',
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000
    }
}));

app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views.googleID++;
      res.send("You visited this page " + req.session.page_views.googleID + " times");
   } else {
      console.log(req.session);      
      req.session.page_views = {
          googleID : 1 ,
          firstName : "gaurav" ,
          lastName : "nagar" ,
          email : "gauravnagar192@gmail.com" ,
          picture : "irteisieswietieitei"
      };
      console.log(req.session);
      res.send("Welcome to this page for the first time!");
   }
});
app.listen(5000,() => console.log("app started at 5000"));