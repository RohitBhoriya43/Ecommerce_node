class ClientErrorResponse extends Error {
    constructor(message,http_status){
        this.data = {
            isError:true,
            errors:[message]
        }
        this.httpStatus = http_status

    }
}

module.exports = {ClientErrorResponse}