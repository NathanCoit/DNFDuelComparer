const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const characters = [{name:'Swift Master'},{ name:'Troubleshooter'}];

app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/my-app/dist/dnf-duel-comparer/"));

app.get('/api/characters', (req, res) => {
  res.json(characters);
});

app.get('/', (req,res) => {
  res.sendFile(process.cwd()+"/my-app/dist/dnf-duel-comparer/index.html")
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});