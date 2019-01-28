const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const http = require('http').Server(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// api controllers
app.get('/api', function(req, res) {
  res.json({ status: '200' });
});

app.use('/api/pois', require('./controllers/apiPois'));

app.use('/api/articles', require('./controllers/apiArticles'));

app.use('/api/traveller', require('./controllers/apiTraveller'));

http.listen(process.env.PORT || 3000, function() {
  console.log(`Listening on ${process.env.PORT ? process.env.PORT : 'localhost:3000'}`);
});
