require('dotenv').config();
const fetch = require('node-fetch');
const express = require('express');
const app = express();
const giphyAPIKey = process.env.GIPHY_API_KEY;

const giphyAPI = `http://api.giphy.com/v1/gifs/search?api_key=${giphyAPIKey}&limit=1&offset=0&rating=G&lang=en&q=`;

app.use(express.static('public'));

app.get('/get-graphic', (req, res) => {
  if (req.query.word) {
    const graphicUrl = giphyAPI + req.query.word
    // console.log(`grphic, ${graphicUrl}`)
    fetch(graphicUrl)
      .then((res) => res.json())
      .then((json) => json.data[0].images.fixed_height.url)
      .then((imageUrl) => res.send(imageUrl))
      .catch((err) => { 
        console.error(err)
        res.status(500).send('Data not available')
      })
  }
})

app.listen(5000, function () {
  console.log('App listening on port 5000!')
})

