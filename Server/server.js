const express = require('express');
const dotenv = require('dotenv');
const url = require('url');
dotenv.config();
const app = express(),
      bodyParser = require("body-parser");
      port = process.env.NODEPORT;

const { Pool, Client } = require('pg');
const MySQLPool = new Pool();
app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/my-app/dist/dnf-duel-comparer/"));

app.get('/api/characters', (req, res) => {
  let query = 
  {
    text: 'SELECT Name FROM CHARACTER;'
  }
  MySQLPool.query(
    query, (sqlErr, sqlRes) =>
    {
      if(sqlErr)
      {
        console.log(sqlErr.stack);
        res.json({ErrorMessage: sqlErr.stack});
      }
      else
      {
        let characters = [];
        sqlRes.rows.forEach(sqlRow => {
          characters.push(sqlRow)
        });
        res.json(characters);
      }
    }
  )
});

app.get('/api/interactions', (req, res) => {
  let query = 
  {
    text: 'SELECT * FROM Interaction;'
  }
  MySQLPool.query(
    query, (sqlErr, sqlRes) =>
    {
      if(sqlErr)
      {
        console.log(sqlErr.stack);
        res.json({ErrorMessage: sqlErr.stack});
      }
      else
      {
        let interactions = [];
        sqlRes.rows.forEach(sqlRow => {
          interactions.push(sqlRow)
        });
        res.json(interactions);
      }
    }
  )
});

app.get('/api/moves', (req, res) => {
  let queryData = url.parse(req.url, true).query;
  let query = 
  {
    text: 'SELECT * FROM Move WHERE CharacterName = $1;',
    values: [queryData.charactername]
  }
  MySQLPool.query(
    query, (sqlErr, sqlRes) =>
    {
      if(sqlErr)
      {
        console.log(sqlErr.stack);
        res.json({ErrorMessage: sqlErr.stack});
      }
      else
      {
        let moves = [];
        sqlRes.rows.forEach(sqlRow => {
          moves.push(sqlRow)
        });
        res.json(moves);
      }
    }
  )
});

app.get('/', (req,res) => {
  res.sendFile(process.cwd()+"/my-app/dist/dnf-duel-comparer/index.html")
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});