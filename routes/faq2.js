var data = require('../faq.json');

exports.view = function(req, res){
	console.log(data);
	res.render('faq2', data);
	
};