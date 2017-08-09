const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      crypto = require('crypto');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  salt: String,
});

userSchema.virtual('password')
.set(function(password) {
  this._plainPassword = password;
  if (password) {
    this.salt = crypto.randomBytes(128).toString('base64');
    this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1, 128, 'sha1');
  } else {
    this.salt = undefined;
    this.passwordHash = undefined;
  }
})
.get(function() {
  return this._plainPassword;
});

userSchema.methods.checkPassword = function(password) {
  if (!password) { return false; }
  if (!this.password.passwordHash) { return false; }
  return crypto.pbkdf2Sync(password, this.salt, 1, 128, 'sha1') === this.passwordHash;
};

userSchema.methods.toSafeObject = function() {
  return {
    username: this.username,
    id: this.id,
  };
}

const User = mongoose.model('User', userSchema);

module.exports = User;