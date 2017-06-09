var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});

var url = 'mongodb://localhost:27017/preps';

app.engine('handlebars', handlebars.engine);

app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.render('home');
});

app.post('/', function(req, res){
	console.log('going to write: ' + req.body.word);
	
	mongoClient.connect(url, function(err, db) {
		console.log('db connection opened');
		var collection = db.collection('sentences');
		collection.insert({word: req.body.word});
		collection.find().toArray(function(err, docs){
			docs.forEach(function(e){
				console.log(JSON.stringify(e));
			});
			res.json(docs);
			});
		db.close(function(){console.log('db connection closed');});
	});	
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

