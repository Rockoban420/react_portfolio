const { Schema, model } = require('mongoose');

const InfoSchema = new Schema({
  contactname: {
    type: String,
    required: 'You need to write a name!',
    minlength: 1,
    maxlength: 280,
    trim: true,
    required: true,
  },
  contactemail: {
    type: String,
    required: 'You need to write an email!',
    trim: true,
  },
  contactmessage: {
    type: String,
    required: 'You need to leave a message!',
    minlength: 1,
    maxlength: 280,
    trim: true,
    required: true,
  },
});

const Info2 = model('Info2', InfoSchema);

module.exports = Info2;
