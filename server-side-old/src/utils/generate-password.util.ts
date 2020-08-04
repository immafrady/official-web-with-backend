import md5 = require("md5");

export function generatePassword(password) {
    return md5(password)
}
