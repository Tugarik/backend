import { pool } from "../config/mysqlconfig.js";

export async function getEmployees(limit) {
  const [rows] = await pool.query(
    `SELECT emp_no, salary FROM salaries limit ${limit}`
  );
  return rows;
}
