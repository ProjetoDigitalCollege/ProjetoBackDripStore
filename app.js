import configDB from "./database.js";
import User from './models/User.js';
import mysql from 'mysql2/promise';
import dotenv from "dotenv";

dotenv.config();

async function insertData() {
  try {
    // Sincroniza o DB com o model
    await configDB.sync()
    console.log("DB Sincronizado");
    
    // Cria um novo registo na tabela users
    // INSERT INTO users (username, email) VALUES ('Nome', 'Email@gmail.com')
    const user = await User.create(
      {
        username: "Gabriel",
        email: "gaaabriel@gmail.com",
      }
    );
    console.log('Usuario registrado', user.toJSON());

  } catch (error) {
    console.error('Insert: Erro ao conectar com a DB', error);

  } finally {
    await configDB.close();

  }
};

async function createDatabase() {
  try {
      const connection = await mysql.createConnection(
        {
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASS,
        },
      );

      // Cria um novo DB
      await connection.query(
        'CREATE DATABASE IF NOT EXISTS ' + process.env.DB_NAME
      ); console.log('DB criada');

      await connection.end();
      
      

  } catch (error) {
    console.error('Create: Erro ao conectar na DB: ', error);
    
  } finally {
    await configDB.close();
  }
  insertData();
}

console.log('\n 3. Main > Insere um novo registo \n');

createDatabase();