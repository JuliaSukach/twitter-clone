const crypto = require('crypto')

// Generate a random 6-digit verification code
function verificationCode() {
    return crypto.randomBytes(3).toString('hex').toUpperCase()
}

module.exports = {
    code: verificationCode()
};