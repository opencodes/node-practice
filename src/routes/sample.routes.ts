module.exports = (app: any) => {
  const user = require('../controllers/sample.controller.ts');

  // Create a new Note
  app.post('/user', user.create);

  // Retrieve all Notes
  app.get('/user', user.findAll);

  // Retrieve a single Note with noteId
  app.get('/user/:userId', user.findOne);

  // Retrieve a single Note with noteId
  // // Update a Note with noteId
  app.put('/user/:userId', user.update);

  // // Delete a Note with noteId
  app.delete('/user/:userId', user.delete);
};
