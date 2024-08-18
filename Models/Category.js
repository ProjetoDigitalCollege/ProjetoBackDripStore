import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";

export const Category = DBconfig.define("categoria", {
  nome: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  usa_no_menu: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  }
});
