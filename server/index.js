const express = require('express');
const { useCallback } = require('react');
const app = express();
const PORT = 3000 || process.env.PORT;
const db = require('./db.js')

app.use(express.static('public'));

app.get('/api/movies', (req, res) => {
  //send list of movies retrieved from the data base
  db.getAllMovies((err, movies) => {
    if(err) {
      console.log(err);
      res.send(500);
    } else {
      res.send(movies)
    }
  })
})


//empty request handlers
app.post('/', (req, res) => {
  res.send('hello from empty post request')
})

app.get('/', (req, res) => {
  res.send('hello from empty get request')
})

app.put('/', (req, res) => {
  res.send('hello from empty put request')
})
app.patch('/', (req, res) => {
  res.send('hello from empty patch request')
})
app.delete('/', (req, res) => {
  res.send('hello from empty delete request')
})


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
