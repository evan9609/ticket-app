/** @type {import('next').NextConfig} */
const nextConfig = {
  ReactStrictMode:  true , 
  env: { 
    DB_KEY:  process.env.MONGODB_URL , 
  }
}

module.exports = nextConfig
