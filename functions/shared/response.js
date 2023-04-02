const response_code = require('../constants/response_code');

class Response {
    constructor(responseCode = response_code.SUCCESS_CODE, responseMsg = "Success", result = []) {
        this.responseCode = responseCode;
        this.responseMsg = responseMsg;
        this.result = result;
    }
}

module.exports = Response