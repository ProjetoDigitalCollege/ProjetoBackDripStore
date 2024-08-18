import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";

import { Image } from "./Image.js";
import { Product } from "./Product.js";


export const ProductImage = DBconfig.define("produtos_imagem", {})

Image.belongsToMany(Product, 
  { 
    through: ProductImage,
    foreignKey: 'imagem_id', 
    otherKey: 'produto_id',     
    onDelete: 'CASCADE',    
    onUpdate: 'CASCADE' 
  });
Product.belongsToMany(Image, 
  { 
    through: ProductImage,
    foreignKey: 'imagem_id', 
    otherKey: 'produto_id',     
    onDelete: 'CASCADE',    
    onUpdate: 'CASCADE' 
  });
