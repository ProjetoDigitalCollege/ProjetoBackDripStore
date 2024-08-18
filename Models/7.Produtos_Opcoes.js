import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";

import { Produto } from "./4.Produto.js";

export const Produtos_Opcoes = DBconfig.define("produtos_opcoes", {
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

Produto.hasMany(Produtos_Opcoes, { 

  foreignKey: 'produto_id', 
  as: 'productOptions' 
  
});
Produtos_Opcoes.belongsTo(Produto, { 

  foreignKey: 'produto_id', 
  as: 'product' 

});
