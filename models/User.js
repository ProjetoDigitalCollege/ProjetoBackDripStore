import { DataTypes } from "sequelize";
import configDB from "../database.js";

// Cria a tabela users na database (CREATE TABLE users)
const User = configDB.define("users",
  {
    // Cria o campo username na tabela users
      username: {
        type: DataTypes.STRING(30), //varchar(255)
        allowNull: false, //NOT NULL
      },
      // Cria o campo e-mail na tabela users
      email: {
        type: DataTypes.STRING(50), //varchar(255)
        allowNull: false, //NOT NULL
        unique: true, //Não pode repetir
      },
      // password: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   unique: false,
      // }
  });

  console.log('\n 2. User > dropa e recria a tabela users \n');
  

  export default User;