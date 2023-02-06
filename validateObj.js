const validateObj = (key, obj) => {
    if (key in obj) {
        return true
    } else {
        return false
    }
}
module.exports = validateObj;