var data = require('../dailies.json');

exports.view = function(req, res){
	console.log(data);
	res.render('dailies', data);
	
};