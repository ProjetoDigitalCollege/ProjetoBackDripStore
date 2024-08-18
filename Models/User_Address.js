import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";

import { User } from "./User.js";
import { Address } from "./Address.js";

export const UserAddress = DBconfig.define("usuarios_Endereco", {
  nome: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },

});
User.belongsToMany(Address, 
  { 
    through: UserAddress,
    foreignKey: 'usuario_id',   
    onDelete: 'CASCADE',    
    onUpdate: 'CASCADE' 
  });
Address.belongsToMany(User, 
  { 
    through: UserAddress,
    foreignKey: 'endereco_id',      
    onDelete: 'CASCADE',    
    onUpdate: 'CASCADE' 
  });
