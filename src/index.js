const express = require('express');

const app = express();

app.use(express.json());

app.post('/github', (req, res) => {
  const event = req.headers['x-github-event'];
  if (!event) {
    return res.sendStatus(400);
  }
  console.log(event, req.body.action, req.body.member);
  return res.sendStatus(200);
});

app.listen(1337, () => console.log('Listening for webhooks on port 1337!'));
