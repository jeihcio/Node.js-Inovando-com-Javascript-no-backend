var mysql = require('mysql');		

function createDBConnection(){
	return connection = mysql.createConnection({
			   host: 'localhost',
			   user: 'root',
			   password: 'toor',
			   database: 'casadocodigo_nodejs'
		   });
}

// wrapper
module.exports = function(){
	return createDBConnection;
}