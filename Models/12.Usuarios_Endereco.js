import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";

import { Usuario } from "./11.Usuario.js";
import { Endereco } from "./2.Endereco.js";

export const Usuarios_Endereco = DBconfig.define("usuarios_Endereco", {
  nome: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },

});
Usuario.belongsToMany(Endereco, 
  { 
    through: Usuarios_Endereco,
    foreignKey: 'usuario_id',   
    onDelete: 'CASCADE',    
    onUpdate: 'CASCADE' 
  });
  Endereco.belongsToMany(Usuario, 
  { 
    through: Usuarios_Endereco,
    foreignKey: 'endereco_id',      
    onDelete: 'CASCADE',    
    onUpdate: 'CASCADE' 
  });
