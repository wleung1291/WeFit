// Get all of our friend data
var data = require('../homepage.json');

exports.view = function(req, res){
	console.log(data);
	res.render('homepage2', data);
};