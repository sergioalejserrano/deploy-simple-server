
const express = require("express");

const app = express();

app.use(express.json());

app.get('/cars', function(req,res){
  const data = require('./cars.json')
  res.json(data);
})
app.use(function(req, res, next) {
  res.status(404).send('No pudimos encontrar lo que buscas');
  res.status(500).send('Something broke!');
});
//heroku injects the port number into the PORT env value
const port = process.env.PORT || 3001;

app.listen(port, () => {
  //console.log(`Listening on port:${port}`);
  console.log(`Running`);
});
  
