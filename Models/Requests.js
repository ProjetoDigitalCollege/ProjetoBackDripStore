import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";


import { Product } from "./Product.js";
import { Sales } from "./Sales.js";

export const Requests = DBconfig.define("pedido", {

  
})

Product.belongsToMany(Sales, {
  through: Requests,
  foreignKey: 'produto_id',  
  onDelete: 'CASCADE',   
  onUpdate: 'CASCADE'    
});

Sales.belongsToMany(Product, {
  through: Requests,
  foreignKey: 'venda_id',     
  onDelete: 'CASCADE',    
  onUpdate: 'CASCADE' 
});
