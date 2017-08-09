const createUser = require('./user.create');
const findAllUsers = require('./user.getAll');
const deleteUser = require('./user.delete');
const findUserById = require('./user.getById');
const loginUser = require('./user.login');

module.exports = {
  createUser,
  findAllUsers,
  deleteUser,
  findUserById,
  loginUser,
}