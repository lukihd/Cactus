const User = require('../schema/user')
const bcrypt = require('bcrypt')

module.exports = {
  /**
   * Format string for database entry
   * @function
   * @param {JSON} - User information to check
   */
  modifyHandler: (params) => {
    let errors = []
    const regexString = /^[a-zA-Z]+$/
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&#.])[A-Za-z\d@$!%?&#.]{8,}$/ 
    
    // check lastname format
    if (params.lastname !== "" && !regexString.test(params.lastname)) {
      errors.push('Veuillez n\'utiliser que des lettres pour votre nom')
    }

    // check firstname format
    if (params.firstname !== "" && !regexString.test(params.firstname)) {
      errors.push('Veuillez n\'utiliser que des lettres pour votre prénom')
    }

    // Check email format
    if (params.email !== "" && !regexEmail.test(params.email)) {
      errors.push('Le format de l\' adresse email est éronnée')
    }
    // Check emails match 
    else if (params.email !== params.emailConfirmation) {
      errors.push('Les adresses emails ne sont pas identiques')
    }

    // Check password format
    if (params.password !== "" && !regexPassword.test(params.password)) {
      errors.push('Le mot de passe doit contenir au minimum 8 caractères, 1 minuscule, 1 majuscule, 1 caractère spécial et 1 chiffre')
    } 
    // Check passwords match
    else if (params.password !== params.passwordConfirmation) {
      errors.push('Les mots de passe ne sont pas identiques')
    }
    return errors
  },

  /**
   * Check what params need to be update on the user profile
   * @function
   * @param {JSON} - User entry
   * @param {JSON} - Database entry
   */
  whatToUpdate: (user, database) => {
    let toUpdateInfo = {}
    for (const key in user) {
      if (user[key] !== "" && !key.includes("Confirmation")) {
        if (user[key] !== database[key])
          toUpdateInfo[key] = user[key]
      }
    }
    return toUpdateInfo
  },

  update: async (userEmail, params, database) => {
    toUpdateInfo = module.exports.whatToUpdate(params, database)
    if (toUpdateInfo.password !== "") {
      if (bcrypt.compare(params.password, database.password)) {
        toUpdateInfo.password = await new Promise((resolve, reject) => {
          bcrypt.hash(params.password, 10, (err, hash) => {
            if (err) reject(err)
            resolve(hash)
          })
        })
      }     
    }
    return await User.findOneAndUpdate({email: userEmail}, toUpdateInfo)
  },

  delete: async (userEmail) => {
    return await User.findOneAndDelete({ email: userEmail})
  }
}