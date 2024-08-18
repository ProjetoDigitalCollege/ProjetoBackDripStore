import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";

import { Category } from "./Category.js";
import { Image } from "./Image.js";

export const Product = DBconfig.define("produto", {
  ativo: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  slug: {
    type: Sequelize.STRING(100),
    allowNull: false,
    unique: true,
  },
  usado_no_menu: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  estoque: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  preco: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0,
    }
  },
  preco_desconto: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: true,
    validate: {
      min: 0,
    }
  }
});
