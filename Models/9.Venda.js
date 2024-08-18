import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";
import { Usuario } from "./11.Usuario.js"; 

export const Venda = DBconfig.define("venda", {
  valor_total: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  usuario_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,
      key: 'id'
    }
  }
});

Venda.belongsTo(Usuario, {
  foreignKey: 'usuario_id',
  as: 'usuario',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

Usuario.hasMany(Venda, {
  foreignKey: 'usuario_id',
  as: 'vendas'
});