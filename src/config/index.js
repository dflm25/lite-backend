// config.js
import dotenv from "dotenv";

dotenv.config();

const config = {
  NODE_ENV: process.env.NODE_ENV || "development",
  HOST: process.env.HOST || "127.0.0.1",
  PORT: process.env.PORT || 3002,
  CLIENT: process.env.CLIENT || "http://localhost:3000",
};

export default config;
