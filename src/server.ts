const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// parse application/json
app.use(bodyParser.json());

// Configuring the database
const dbConfig = require('./datasources/db.datasource');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((err: any) => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });

// define a simple route
app.get('/', (req: any, res: any) => {
  res.json({
    message: 'Welcome to the application.',
  });
});

require('./routes/sample.routes')(app);

// listen for requests
app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});
