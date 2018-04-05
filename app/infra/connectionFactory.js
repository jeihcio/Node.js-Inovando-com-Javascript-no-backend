var mysql = require('mysql');		

function createDBConnection(){
	if(!process.env.NODE_ENV){
		return connection = mysql.createConnection({
				    host: 'localhost',
			   		user: 'root',
			   		password: 'toor',
			   		database: 'casadocodigo_nodejs'
		   		});
	}

	if(process.env.NODE_ENV == 'test'){
		return connection = mysql.createConnection({
				    host: 'localhost',
			   		user: 'root',
			   		password: 'toor',
			   		database: 'casadocodigo_nodejs_test'
		   		});
	}
}

// wrapper
module.exports = function(){
	return createDBConnection;
}