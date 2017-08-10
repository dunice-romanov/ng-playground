const Todo = require('../../../../models/todo');

const createTodo = (req, res, next) => {
  const { title, text } = req.body;
  if (!title || !text) { return res.status(400).json({error: 'Provide title and text'}); }

  const user = req.user;
  if (!user) { return res.status(400).json({error: 'User is empty'}); }

  Todo.create({
    title,
    text,
    user,
  })
  .then((todo) => {
    res.json({
      _id: todo._id,
      updatedAt: todo.updatedAt,
      createdAt: todo.createdAt,
      title: todo.title,
      text: todo.text,
      user: todo.user._id,
    });
  })
  .catch((error) => {
    console.log('Error creating Todo', error);
    res.status(400).json({error: 'Error creating todo'});
  });
};

module.exports = createTodo;