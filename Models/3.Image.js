import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";

export const Image = DBconfig.define("imagens", {
  ativo: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  path: {
    type: Sequelize.STRING(255),
    allowNull: false,
  }
});
