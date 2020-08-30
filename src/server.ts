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
console.log(dbConfig);

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
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
    message:
      'Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes.',
  });
});

require('./routes/sample.routes')(app);

// listen for requests
app.listen(5000, () => {
  console.log('Server is listening on port 3000');
});
