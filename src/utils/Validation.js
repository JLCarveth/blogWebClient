/**
 * @module Validation
 * @author John L. Carveth
 * Utility methods for validating user input
 */
export default {
    /**
     * @function Validation.isEmail
     * @param {*} email 
     */
    isEmail : function (email) {
        const rx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return rx.test(email)
    }
}