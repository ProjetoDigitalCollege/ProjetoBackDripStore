import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";

export const Endereco = DBconfig.define("endereco", {
  endereco: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  bairro: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  cidade: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  cep: {
    type: Sequelize.STRING(10),
    allowNull: false,
    validate: {
      is: /^[0-9]{5}-?[0-9]{3}$/,
    }
  },
  complemento: {
    type: Sequelize.STRING(255),
    allowNull: true,
  }
});
