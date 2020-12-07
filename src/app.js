const express = require('express');
const main = require('./main');
const app = express();
const port = 3000;

app.get('/employee/:id', async (req, res) => {
  let id = parseInt(req.params.id);
  if(main.isOfType(id, 'number')) {
    let data = await main.getFullData(id);
    res.send(data);
  } else {
    res.send('400 - Bad request');
  }
});

app.get('/employee/:id/:column', async (req, res) => {
  let id = parseInt(req.params.id);
  let column = req.params.column;
  if(main.isOfType(id, 'number') && 
    main.isOfType(column, 'string')) {
    let data = await main.getData(id, column);
    res.send(data);
  } else {
    console.log(`400 - Bad request`)
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});