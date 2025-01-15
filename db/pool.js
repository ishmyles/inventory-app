import "dotenv/config";
import pg from "pg";
const { Pool } = pg;

export default new Pool({
  host: process.env.DB_DEV_HOST,
  user: process.env.DB_USERNAME,
  database: "inventory",
  password: process.env.DB_PASSWORD,
  port: process.env.DB_DEV_PORT,
});
