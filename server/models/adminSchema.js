const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  encryptedPassword: {
    type: String,
    required: true 
  }
})


const company = mongoose.model('company', companySchema)

module.exports = { company, companySchema }