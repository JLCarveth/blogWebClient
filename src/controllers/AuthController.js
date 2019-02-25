/**
 * @module controllers/AuthController
 * Handles all of the Web Request logic for all authentication-related tasks
 */

/**
 * Dependencies
 */
import axios from '../utils/Axios'

const authenticateCredentials = function (email, password, callback) {
    axios.post('/login', {
        'email':email,
        'password':password
    }).then((response) => {
        callback(null, response.data)
    }).catch((error) => {
        callback(error)
    })
}

export default {
    authenticateCredentials
}
