import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";

export const Telephone = DBconfig.define("telefone", {
  telefone: {
    type: Sequelize.STRING(15), 
    allowNull: false, 
    validate: {
      is: /^[0-9]{10,15}$/ 
    }
  }
});
