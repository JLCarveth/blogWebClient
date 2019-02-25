/**
 * @module controllers/BlogController
 * Handles all of the web request logic relating to blog actions
 */

/**
 * Dependencies
 */
import axios from '../utils/Axios'

const fetchRecent = function (callback) {
    axios.get('/blog').then(response => {
        callback(null, response.data)
    }).catch(error => {
        callback(error)
    })
}

const fetchByID = function (id, callback) {
    if (!id) callback('ID was not provided')
    axios.get(`/blog/b/${id}`).then(response => {
        callback(null, response.data)
    }).catch(error => {
        callback(error)
    })
}

export default {
    fetchRecent,
    fetchByID
}