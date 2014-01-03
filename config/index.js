var config = {
	dev: {
		label: 'dev',
		port: 3000,
		mysql: {
			database: 'dbname',
			user: 'root',
			password: '',
			config: {
				host: '127.0.0.1',
				port: 3306,
			}
		}
	},
	test: {
		label: 'test',
		port: 4000,
		mysql: {
			database: 'dbname',
			user: 'root',
			password: '',
			config: {
				host: '127.0.0.1',
				port: 3306,
			}
		}
	},
	prod: {
		label: 'prod',
		port: 5000,
		mysql: {
			host: '127.0.0.1',
			port: 3306,
			database: 'dbname',
			user: 'root',
			password: '',
			config: {
				host: '127.0.0.1',
				port: 3306,
			}
		}
	}
}
module.exports = function(mode) {
	return config[mode || process.argv[2] || 'dev'] || config.dev;
}