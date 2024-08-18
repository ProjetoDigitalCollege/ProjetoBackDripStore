import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";


export const Sales = DBconfig.define("venda", {
  valor_total: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0,
    },
  },
});
