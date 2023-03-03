import { pool } from "../config/mysqlconfig.js";

export async function getProducts(limit) {
  const [rows] = await pool.query(`SELECT * FROM product limit ${limit}`);
  return rows;
}

export async function addProduct(properties, values) {
  const [rows] = await pool.query(
    `INSERT INTO product (${properties}) VALUES (?)`,
    [values]
  );
  return rows;
}

export async function delProduct(id) {
  const [rows] = await pool.query(
    `DELETE FROM product WHERE id = ${id}; ALTER TABLE product AUTO_INCREMENT=4000`
  );
  return rows;
}

export async function alterProduct() {
  const [rows] = await pool.query(`ALTER TABLE product AUTO_INCREMENT=4000`);
  return rows;
}
