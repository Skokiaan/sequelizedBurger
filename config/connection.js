var mysql = require("mysql");

var PORT = process.env.PORT || 3306; 


if (process.env.JAWSDB_URL) {
	var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	var connection = mysql.createConnection({
		host: 'otmaa16c1i9nwrek.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'j2xj1vfb3jfjf9c5',
		password: 'z68nkslhezkxore6',
		database: 'burgers_db',
		port: PORT
	});
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;  