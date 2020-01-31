const express = require('express');
const router = express.Router();

const Pusher = require('pusher');

var pusher = new Pusher({
  appId: '940238',
  key: 'a8822e3d50c1988c729e',
  secret: '6931f81028381096a67f',
  cluster: 'us3',
  encrypted: true
});

router.get('/', (req, res) => {
  res.send('Polls are in');
});

router.post('/', (req, res) => {
  pusher.trigger('os-poll', 'os-vote', {
    point: 1,
    vote: req.body.vote
  });

  return res.json({ success: true, message: "Thank you for voting"});
});

module.exports = router;