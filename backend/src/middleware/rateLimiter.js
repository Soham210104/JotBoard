//7---- rateLimiter.js: Middleware for rate limiting using Upstash Redis
import ratelimit from "../config/upstash.js";
const rateLimiter = async(req, res, next) => {
 try{
    const {success} = await ratelimit.limit("my-rate-limit");
    if(!success){
      return res.status(429).json({message: "Too many requests, please try again later."}); 
    }
    next();
 }catch (error) {
   console.error("Error occurred while rate limiting:", error);
   next(error);
 }
}

export default rateLimiter;