import mysql from 'mysql2/promise';

export async function dbInit() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'hp-app',
  });

  return connection;
}
