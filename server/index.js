const express = require('express');
const { useCallback } = require('react');
const app = express();
const PORT = 3000 || process.env.PORT;


app.use(express.static('public'));

app.get('/api/movies', (req, res) => {
    res.send('hello world')
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})