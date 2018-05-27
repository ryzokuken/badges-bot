const app = require('express')();

app.post('/github', (req, res) => {
  console.log(req);
  res.sendStatus(200);
});

app.listen(1337, () => console.log('Listening for webhooks on port 1337!'));
