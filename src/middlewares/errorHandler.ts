import { NextFunction, Request, Response } from "express";
import APIError from "../error/APIError";
import {promises as fsp} from "fs"

const errorHandler = (err: typeof APIError, req: Request, res: Response, next: NextFunction) => {
    const filePath = "./src/logs/errors.txt"
    const currentDate = new Date()
    const date = currentDate.toLocaleDateString()
    const time = currentDate.toLocaleTimeString()

    if(err instanceof APIError){
        let msg = `date: ${date}, time: ${time}, Method: ${req.method}, Path: ${req.path}, ErrorCode: ${err.code}, ErrorMessage: ${err.message}\n`
        fsp.appendFile(filePath,msg).then(() => next()).catch(() => {
            next(new Error('Something went wrong'))
            return
        })
        res.status(err.code).json({
            errormsg: err.message
        })
        return
    }
    const msg = `date: ${date}, time: ${time}, Method: ${req.method}, Path: ${req.path}, ErrorCode: ${500}, ErrorMessage: ${"Something went wrong"}`
        fsp.appendFile(filePath, msg).then(() => next()).catch(() => {
            next(new Error('Something went wrong'))
            return
        })
    res.status(500).json({
        errormsg: "Something went wrong"
    })
}

export default errorHandler