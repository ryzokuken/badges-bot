const express = require('express');
const badges = require('./badges');

const app = express();

app.use(express.json());

app.post('/github', (req, res) => {
  const event = req.headers['x-github-event'];
  if (!event) {
    return res.sendStatus(400);
  }
  badges.handlePayload({
    hook: event,
    action: req.body.action,
    payload: req.body
  });
  return res.sendStatus(200);
});

app.listen(1337, () => console.log('Listening for webhooks on port 1337!'));
