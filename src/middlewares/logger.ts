import { NextFunction, Request, Response } from 'express'
import fs from "fs"

const myLogger = (req: Request, _: Response, next: NextFunction) => {
    const reqFilePath = './src/logs/requests.txt';
    const currentDate = new Date
    const date = currentDate.toLocaleDateString()
    const time = currentDate.toLocaleTimeString()
    const logRequestData = `date: ${date}, time: ${time}, Method: ${req.method}, Path: ${req.path}\n`

    fs.appendFile(reqFilePath,logRequestData,(err) => {
        if(err) {
           next(new Error("Something went wrong"))
           return
        }
        next()
    })
}

export default myLogger