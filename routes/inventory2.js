var data = require('../inventory.json');

exports.view = function(req, res){
	console.log(data);
	res.render('inventory2', data);
	
};