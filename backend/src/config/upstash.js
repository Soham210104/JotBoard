//6-- upstash.js: Configures Upstash Redis connection

import { Ratelimit } from '@upstash/ratelimit'; // for rate limiting
import { Redis } from '@upstash/redis';
import dotenv from 'dotenv';

dotenv.config();

// Create a rateLimiter that allows 5 requests per 10 seconds
const redis = Redis.fromEnv();

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(100, '60 s'),
});

export default ratelimit;