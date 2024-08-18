import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";

import { Image } from "./3.Image.js";
import { Produto } from "./4.Produto.js";


export const Produtos_Imagem = DBconfig.define("produtos_imagem", {})

Image.belongsToMany(Produto, 
  { 
    through: Produtos_Imagem,
    foreignKey: 'imagem_id', 
    otherKey: 'produto_id',     
    onDelete: 'CASCADE',    
    onUpdate: 'CASCADE' 
  });
  Produto.belongsToMany(Image, 
  { 
    through: Produtos_Imagem,
    foreignKey: 'imagem_id', 
    otherKey: 'produto_id',     
    onDelete: 'CASCADE',    
    onUpdate: 'CASCADE' 
  });
