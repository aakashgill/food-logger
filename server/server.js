const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient
require('dotenv').config();
const app = express();
const connectionString = 'mongodb+srv://admin:admin@lightsaber-nusxf.mongodb.net/test?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

app.use(morgan('common'));
app.use(cors());
app.use(express.json());
// works in Form action. Returned input having name attribute as key and value as value
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {console.log(`running server at http://localhost:${PORT}`)})

MongoClient.connect(connectionString, {useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database');

    const db = client.db('health-track');
    const foodLogs = db.collection('food-logs');

    app.post('/add', (req, res) => {
      foodLogs.insert(req.body)
        .then(result => {
          res.send(req.body);
        })
        .catch(error => console.error(error))
        console.log(req.body);
      })
    app.get('/api', (req, res) => {
      foodLogs.find().toArray()
          .then(results => {
            console.log(results)
            res.send(results);
          })
          .catch(error => console.error(error))
    })

  });