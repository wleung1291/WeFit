var data = require('../profile.json');

exports.view = function(req, res){
	console.log(data);
	res.render('profile', data);
	
};