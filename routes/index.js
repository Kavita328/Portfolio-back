var express = require('express');
var router = express.Router();
require('dotenv').config();


const apiKey = process.env.OWM_API_KEY
const channelId = process.env.CHANNEL_ID

router.get('/', (req, res) => {
  res.send("Congratulation 🎉🎉! Our Express server is Running on Vercel")
 });

router.get('/videos', (req, res) => {
  fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&type=video&order=date`)
    .then(response => response.json())
    .then(data => {
      res.json({ videos: data });
    });
 });


module.exports = router;


