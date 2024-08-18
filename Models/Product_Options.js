import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";

import { Product } from "./Product.js";

export const ProductOption = DBconfig.define("produtos_opcoes", {
  titulo: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  shape: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  radius: {
    type: Sequelize.FLOAT,
    allowNull: true,
    validate: {
      min: 0,
    }
  },
  type: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  values: {
    type: Sequelize.JSONB,
    allowNull: true,
  },
});

Product.hasMany(ProductOption, { 

  foreignKey: 'produto_id', 
  as: 'productOptions' 
  
});
ProductOption.belongsTo(Product, { 

  foreignKey: 'produto_id', 
  as: 'product' 

});
