import mysql from 'mysql2';

// Not using enviromental variables
// export async function dbInit() {
//   const connection =  await mysql.createConnection({
//     host: '',
//     port: '',
//     user: '',
//     password: '',
//     database: ''
//   });
//   return connection;
// }

// Using enviromental variables
// Create .env-file in the server directory (.env is added to gitignore and shouldn't be published to github)
// Then simply add this (example):
// DATABASE_HOST='1.1.1.1'
// DATABASE_PORT='1111'
// DATABASE_USER='username'
// DATABASE_PASSWORD='password'
// DATABASE_DATABASE='mysql-database-name'

export async function dbInit() {
  const connection = await mysql.createPool({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE
  }).promise();
  return connection;
}
