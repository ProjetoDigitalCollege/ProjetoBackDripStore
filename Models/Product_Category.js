import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";

import { Category } from "./Category.js";
import { Product } from "./Product.js";

export const ProductCategory = DBconfig.define("produtos_categoria", {})

Category.belongsToMany(Product,
  {
    through: ProductCategory,
    foreignKey: 'categoria_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
Product.belongsToMany(Category,
  {
    through: ProductCategory,
    foreignKey: 'produto_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
