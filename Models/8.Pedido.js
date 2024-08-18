import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";


import { Produto } from "./4.Produto.js";
import { Venda } from "./9.Venda.js";

export const Pedido = DBconfig.define("pedido", {

})

Produto.belongsToMany(Venda, {
  through: Pedido,
  foreignKey: 'produto_id',  
  onDelete: 'CASCADE',   
  onUpdate: 'CASCADE'    
});

Venda.belongsToMany(Produto, {
  through: Pedido,
  foreignKey: 'venda_id',     
  onDelete: 'CASCADE',    
  onUpdate: 'CASCADE' 
});
