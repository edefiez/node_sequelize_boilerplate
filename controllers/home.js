var db = require('../models')

module.exports = function(req, res) {
	res.render('templates/index', { 
		title: 'Node + Sequelize + Twig Boilerplate',
	});
}