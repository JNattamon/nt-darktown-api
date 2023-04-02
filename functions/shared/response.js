class Response {
    constructor(code = "0000", message = "Success", result = []) {
        this.code = code;
        this.message = message;
        this.result = result;
    }
}

module.exports = Response