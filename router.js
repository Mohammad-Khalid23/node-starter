const UserController = require('./api/controllers/UserController');

module.exports = (app) => {

  app.get('/', (req , res) => {
    res.send({message:"Hello World"})
  })
  app.post('/register',UserController.register);
  app.get('/users',UserController.getAllUser);
  app.post('/login',UserController.login);
  

}