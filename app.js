
let express = require('express');
let path = require('path')
let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  console.log(req.url)
  res.render('index', { message: {
    test : 'adsf',
    test2v : 'asdadfafd'
  }, title : 'Hello there!' })
})

module.exports = app;
