const bcrypt = require('bcrypt')
let User = require('../schema/user')

module.exports = {
  createUser: async (params) => {
    // create user
    let newUser = new User({
      firstname: params.firstname.toLowerCase(),
      lastname: params.lastname.toLowerCase(),
      gender: params.gender,
      birthdate: params.birthdate,
      email: params.email,
    })
    bcrypt.hash(params.password, 10, (err, hash) => {
      if (err) throw err
      newUser.password = hash
      return newUser.save() 
    })
  }
}