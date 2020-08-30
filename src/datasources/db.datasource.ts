const config = {
  name: 'db',
  connector: 'mongodb',
  url: 'localhost',
  host: 'localhost',
  port: 27017,
  user: '',
  password: '',
  database: 'ph_sample',
  useNewUrlParser: true,
};
module.exports = {
  url: `mongodb://${config.host}:${config.port}/${config.database}`,
};
