const Redis = require("ioredis");
const redisClient = new Redis({
  host: "127.0.0.1",  // Default Redis server host
  port: 6379,         // Default Redis server port
  // No password needed for local Redis without authentication
});

module.exports = redisClient;
