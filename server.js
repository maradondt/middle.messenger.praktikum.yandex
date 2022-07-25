const express = require('express');

const app = express();
const { PORT = 3000 } = process.env;
const public = __dirname + '/dist';
app.use(express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
  res.sendFile(public + '/index.html');
});

app.use('/', express.static(public));
app.use('/404', express.static(public));
app.use('/500', express.static(public));
app.use('/singin', express.static(public));
app.use('/singup', express.static(public));

app.listen(PORT, function () {
  console.log(`Example app listening on port localhost:${PORT}!`);
});
