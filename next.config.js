/** @type {import('next').NextConfig} */
const nextConfig = { 
  env: { 
    DB_KEY:  process.env.MONGODB_URL , 
  }
}

module.exports = nextConfig
