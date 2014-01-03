module.exports = function(app) {
	app.get('/', function(req, res){
		require('../controllers/home')(req, res);
	});
}
