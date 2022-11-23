// users router
import express, { NextFunction, Request, Response } from "express";
import users from "../data/data";
import APIError from "../error/APIError";

const router = express.Router()

router.param("userId",(req: Request, _: Response, next: NextFunction, userId) => {
    const user = users.find((user) => user.id == userId )
    if(!user){
        next(APIError.notFound("User data is not found."))
        return
    }
    req.user = user
    next()
})

router.get("/", (_: Request,res: Response) => {
    res.send({
        users
    })
})

router.get("/:userId", (req: Request, res: Response) => {
    res.send({
        user: req.user
    })
})

router.post("/", (req: Request, res: Response, next: NextFunction) => {
    const {first_name, last_name, email, gender, ip_address} = req.body

    if(!first_name || !last_name || !email){
        next(APIError.badRequest("first_name, last_name and email are required."))
        return
    }

    res.send({
        id: users.length + 1,
        first_name,
        last_name,
        email,
        gender: (!gender) ? "" : gender,
        ip_address: (!ip_address) ? "" : ip_address
    })
})

router.put("/:userId", (req: Request, res: Response, next: NextFunction) => {
    const {first_name, last_name, email, gender, ip_address} = req.body

    if(first_name !== undefined && first_name === '') {
        next(APIError.badRequest("first_name parameter cannot be empty"))
        return
    } else if(last_name !== undefined && last_name === '') {
        next(APIError.badRequest("last_name parameter cannot be empty"))
        return
    } else if(email !== undefined && email === '') {
        next(APIError.badRequest("email parameter cannot be empty"))
        return
    }

    res.send({
        id: req.user.id,
        first_name: (first_name === undefined) ? req.user.first_name : first_name,
        last_name: (last_name === undefined) ? req.user.last_name : last_name,
        email: (email === undefined) ? req.user.email : email,
        gender: (gender === undefined) ? req.user.gender : (gender === '') ? '' : gender,
        ip_address: (ip_address === undefined) ? req.user.ip_address : (ip_address === '') ? '' : ip_address
    })
})

router.delete("/:userId", (req: Request, res: Response) => {
    res.send(`user data of userId: ${req.user.id} and name: ${req.user.first_name} ${req.user.last_name} is successfully deleted`)
})

export default router

