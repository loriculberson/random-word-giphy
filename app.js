require('dotenv').config()
const giphyAPIKey = process.env.GIPHY_API_KEY

const giphyAPI = `https://api.giphy.com/v1/gifs/search?api_key=${giphyAPIKey}&limit=1&offset=0&rating=G&lang=en&`;

const express = require('express')
const app = express()

app.use(express.static('public'));
app.get('/pic', (req, res) => {
  console.log('params:', req.params);
  const word = '???';
  res.send(`You called pic route with a word = ${word}`);
});

app.listen(5000, function () {
  console.log('App listening on port 5000!')
})