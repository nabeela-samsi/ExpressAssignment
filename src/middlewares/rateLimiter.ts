import rateLimit from "express-rate-limit";

const rateLimiter = rateLimit({
    max: 4,
    windowMs: 10 * 1000,
    message: 'Too many requests are made. Please try again later'
})

export default rateLimiter