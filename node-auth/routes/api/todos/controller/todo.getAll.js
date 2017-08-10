const Todo = require('../../../../models/todo');

const getAllTodos = (req, res, next) => {
  const user = req.user;

  Todo.find({user})
    .then((todos) => {
      res.json(todos);
    })
    .catch((error) => {
      console.log('Error finding all todos', error);
      res.status(400).json({error: 'Error in findings'});
    });
};

module.exports = getAllTodos;