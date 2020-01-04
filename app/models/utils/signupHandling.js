module.exports = {
  /**
   * Format signup entry for database
   * @function
   * @param {JSON} params - body parameters
   */
  signupHandler: (params) => {
    let errors = []
    // Check required fields
    if (!params.lastname || !params.firstname || !params.birthdate || !params.gender || !params.email || !params.emailConfirmation || !params.password || !params.passwordConfirmation) {
      errors.push('Veuillez renseigner tous les champs')
    }

    // check lastname format
    const regexString = /^[a-zA-Z]+$/
    if (!regexString.test(params.lastname)) {
      errors.push('Veuillez n\'utiliser que des lettres pour votre nom')
    }

    // check firstname format
    if (!regexString.test(params.firstname)) {
      errors.push('Veuillez n\'utiliser que des lettres pour votre prénom')
    }

    // Check date format
    const regexDate = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
    if (!regexDate.test(params.birthdate)) {
      errors.push('Veuillez entrer votre date de naissance')
    }
        
    // Check gender
    if (params.gender != "man" && params.gender != "woman") {
      errors.push('Veuillez entrer votre civilité')
    }
    
    // Check email format
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regexEmail.test(params.email)) {
      errors.push('Le format de l\' adresse email est éronnée')
    }

    // Check emails match
    if (params.email !== params.emailConfirmation) {
      errors.push('Les adresses emails ne sont pas identiques')
    }

    // Check password format
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&#.])[A-Za-z\d@$!%?&#.]{8,}$/ 
    if (!regexPassword.test(params.password)) {
      errors.push('Le mot de passe doit contenir au minimum 8 caractères, 1 minuscule, 1 majuscule, 1 caractère spécial et 1 chiffre')
    }
    
    // Check passwords match
    if (params.password !== params.passwordConfirmation) {
      errors.push('Les mots de passe ne sont pas identiques')
    }
    return errors
  }
}