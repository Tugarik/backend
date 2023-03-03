import { pool } from "../config/mysqlconfig.js";

export async function getUsers(limit) {
  const [rows] = await pool.query(`SELECT * FROM user limit ${limit}`);
  return rows;
}
