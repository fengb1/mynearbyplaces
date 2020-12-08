const express = require('express');
const app = express();
const port = 3000;

app.get('/places', (request, response) => {
  let x = [{name: 'a', city: 'Tucson', state: 'Arizona', reviews:[{text: 'very good!', author: 'c'}]},
           {name: 'b', city: 'Tucson', state: 'Arizona', reviews:[{text: 'good!', author: 'd'}]}];
           res.json(x);
})

app.get('/image', request, response) => {
  response.sendFile(__dirname + './components/images/pandaExpress.jpg');
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
})
