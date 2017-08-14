const Todo = require('../../../../models/todo');

const removeTodo = (req, res, next) => {
  const { todoId } = req.params;

  Todo.findOneAndRemove({
    user: req.user._id,
    _id: todoId,
  })
  .then((todo) => {
    if (!todo) { res.status(404).send({error: 'Nothing founds'}); }
    res.json(todo);
  });
};

  module.exports = removeTodo;