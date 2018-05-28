/**
 * Return json parsed response
 * @param response
 * @returns {*} json
 */
export function parseJSON(response) {
    return response.json() || response
}


/**
 * Check the response status and return
 * response or throw error
 * @param response
 * @returns {*} response or throw error
 */
export function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        // if api sends back failure status code,
        // throws response and treated as error in the catch block
        throw response
    }
}


export function jsonToUrlEncoded(json){
    return Object.entries(json).map((e) => e.join('=')).join('&')
}

export function isEmailValid(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}