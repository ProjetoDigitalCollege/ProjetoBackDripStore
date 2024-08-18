import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";

import { Usuario } from "./11.Usuario.js";
import { Telefone } from "./10.Telefone.js";

export const Telefones_Usuario = DBconfig.define("telefones_usuario", {});

Usuario.belongsToMany(Telefone,
  {
    through: Telefones_Usuario,
    foreignKey: 'usuario_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
  Telefone.belongsToMany(Usuario,
  {
    through: Telefones_Usuario,
    foreignKey: 'telefone_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'

  });
