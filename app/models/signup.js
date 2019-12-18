// const User = require('../schema/user')
let PasswordEncryption = require('./passwordEncryption')

module.exports = {
    createUser: async (params) => {
        console.log('hrrlo')
        console.log(params)
        console.log(PasswordEncryption.genSaltHash(params.password))
        // // creating user
        // let newUser = new User({
        //     firstname: params.firstname,
        //     lastname: params.lastname,
        //     gender: params.gender,
        //     birth: params.birth,
        //     email: params.email,
        //     password: hash,
        //     salt: salt
        // })        
    }
}