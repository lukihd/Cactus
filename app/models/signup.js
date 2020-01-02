const passwordEncryption = require('./utils/passwordEncryption')
let User = require('../schema/user')

module.exports = {
  formatUserInfo: (params) => {
    let userInfo = {}
    // format lastname
    userInfo.lastname = params.lastname.toLowerCase()
    // format firstname
    userInfo.firstname = params.firstname.toLowerCase()
    // hash password
    passInfo = passwordEncryption.genSaltHash(params.password)
    userInfo.hash = passInfo.hash
    userInfo.salt = passInfo.salt

    return userInfo
  },

  createUser: async (params) => {
    let userInfo = module.exports.formatUserInfo(params)
    // create user
    let newUser = new User({
      firstname: userInfo.firstname,
      lastname: userInfo.lastname,
      gender: params.gender,
      birth: params.birthdate,
      email: params.email,
      password: userInfo.hash,
      salt: userInfo.salt
    })
    return newUser.save()
  }
}