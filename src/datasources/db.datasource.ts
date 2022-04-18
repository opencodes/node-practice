const config = {
  name: 'db',
  connector: 'mongodb',
  url: 'localhost',
  host: 'localhost',
  port: 27017,
  user: '',
  password: 'JMfaIFIJ3TrNwRYt',
  database: 'nodelearn',
  useNewUrlParser: true,
};
// mongodb+srv://root:<password>@cluster0.vcdx3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
module.exports = {
  // url: `mongodb://${config.host}:${config.port}/${config.database}`,
  url: `mongodb+srv://root:${config.password}@cluster0.vcdx3.mongodb.net/${config.database}?retryWrites=true&w=majority`,
};
