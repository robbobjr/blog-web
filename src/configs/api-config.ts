export const apiConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://0.0.0.0:3333',
  jwtSecret: process.env.JWT_SECRET,
}