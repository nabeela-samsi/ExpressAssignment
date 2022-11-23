// App file
import express from "express";
import errorHandler from "./middlewares/errorHandler";
import myLogger from "./middlewares/logger";
import rateLimiter from "./middlewares/rateLimiter";
import userRouter from "./routers/users";

const app = express();
const port = 3000;

//middleWares
app.use(myLogger)
app.use(rateLimiter)
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//routers
app.use("/api/users", userRouter)

//errorhandler
app.use(errorHandler)

app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`)
})