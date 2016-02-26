var data = require('../profile2.json');

exports.view = function(req, res){
	console.log(data);
	res.render('profile2', data);
	
};