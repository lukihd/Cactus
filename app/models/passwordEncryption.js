const Crypto = require('crypto')

module.exports = {
    /**
     * Generate random string of character > salt
     * @function
     * @param {number} lenght - lenght of the random string
     */
    genSalt: (lenght) => {
        return Crypto.randomBytes(Math.ceil(lenght/2))
            .toString('hex') /** convert to hexa format */
            .slice(0, lenght); /**return required number of format characters */
    },

    /**
     * Hash password with sha512
     * @function
     * @param {string} password - List of required field
     * @param {string} salt - Data to be validated
     */
    genSha512: (password, salt) => {
        let x = Crypto.createHmac('sha512', salt)
            .update(password)
            .digest("hex")
        return x  
    },

    /**
     * End function tha gen salt and gen sha512 password
     * @function
     * @param {string} password - User password to hash
     */
    genSaltHash: (password) => {
        let salt = module.exports.genSalt(32)
        let passwordInfo = module.exports.genSha512(password, salt)
        return passwordInfo
    }
}
