var express    = require('express'),
    app        = express(),
    Poet       = require('poet'),
    markdown   = require('marked'),
    moment     = require('./lib/moment'),
    pygmentize = require('pygmentize-bundled'),
    poet;

moment.locale('nl');

poet = new Poet(app, {postsPerPage: 5});

poet.init().then(function () {
  // initialized
});

app.locals.moment = moment;

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(2000);
