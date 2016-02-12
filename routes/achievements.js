// Get all of our friend data
var data = require('../achievements.json');

exports.view = function(req, res){
	console.log(data);
	res.render('achievements', data);
};