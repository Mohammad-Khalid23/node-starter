const
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  password: { type: String },
}, { collection: 'users' });

// UserSchema.pre('save', (next) => {
//   const user = this;

//   bcrypt.hash(user.password, salt, null, (err, hash) => {
//     if (err) { return next(err) }

//     user.password = hash;

//     next();
//   });
// });

// //  compare passowrd
// UserSchema.methods.comparePassword = (candidPassword, callback) => {
//   bcrypt.compare(candidPassword, this.password, (err, isMatch) => {
//     if (err) { return callback(err); }

//     callback(null, isMatch)
//   });
// }

// create a model
const UserModel = mongoose.model('user', UserSchema);

// Export the model 
module.exports = UserModel;

