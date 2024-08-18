import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";

export const Usuario = DBconfig.define("usuario", {
  nome: {
    type: Sequelize.STRING(50),
    allowNull: true, 
  },
  email: {
    type: Sequelize.STRING(100), 
    allowNull: false, 
    unique: true, 
    validate: {
      isEmail: true, 
    }
  },
  senha: {
    type: Sequelize.STRING(500), 
    allowNull: false, 
  },
  cpf: {
    type: Sequelize.STRING(14), 
    allowNull: false, 
    unique: true,
    validate: {
      is: /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/i, 
    }
  }
});
