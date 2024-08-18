import { Sequelize } from "sequelize";
import config from "../config/config.js";

const User = config.define("usuario", {
  nome: {
    type: Sequelize.STRING(50),
    allowNull: true, 
  },
  email: {
    type: Sequelize.STRING(50), 
    allowNull: false, 
    unique: true, 
    validate: {
      isEmail: true, 
    }
  },
  senha: {
    type: Sequelize.STRING(100), 
    allowNull: false, 
  },
  cpf: {
    type: Sequelize.STRING(11), 
    allowNull: false, 
    unique: true,
    validate: { is: /^[0-9]{3}\[0-9]{3}\[0-9]{3}[0-9]{2}$/i}
  }
});

export default User;
