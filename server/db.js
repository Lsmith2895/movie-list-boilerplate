var mysql = require('mysql');
const { useCallback } = require('react');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'student',
    password: 'student',
    database: 'movieList'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('yay we connected')
    }
});

//retrieve data from mysql database
module.exports = {
    getAllMovies: (callback) => {
        connection.query('SELECT * FROM movies', (err, data) => {
            if (err) {
                console.log(err)
                callback(err);
            } else {
                callback(null, data)
            }
        })
    }
}

//send data to movies table

