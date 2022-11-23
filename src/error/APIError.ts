class APIError{
    constructor(public code: number, public message: string) {
        this.code = code
        this.message = message
    }
    static badRequest(errormsg: string){
        return new APIError(400,errormsg)
    }
    static notFound(errormsg: string){
        return new APIError(404,errormsg)
    }
    static internalError(errormsg: string){
        return new APIError(500,errormsg)
    }
}

export default APIError