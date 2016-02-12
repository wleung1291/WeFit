// Get all of our friend data
var data = require('../faq.json');

exports.view = function(req, res){
	console.log(data);
	res.render('faq', data);
	
};