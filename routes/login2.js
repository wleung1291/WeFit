// Get all of our friend data
var data = require('../login.json');

exports.view = function(req, res){
	console.log(data);
	res.render('login2', data);
};