var express = require('express');
var router = express.Router();
require('dotenv').config();


const apiKey = process.env.OWM_API_KEY
console.log(apiKey)
const channelId = process.env.CHANNEL_ID


router.get('/videos', (req, res) => {
  fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&type=video&order=date`)
    .then(response => response.json())
    .then(data => {
      res.json({ videos: data });
    });
 });

module.exports = router;

