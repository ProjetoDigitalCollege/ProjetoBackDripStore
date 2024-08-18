import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";

import { User } from "./User.js";
import { Telephone } from "./Telephone.js";

export const UserTelephone = DBconfig.define("telefones_usuario", {});

User.belongsToMany(Telephone,
  {
    through: UserTelephone,
    foreignKey: 'usuario_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
Telephone.belongsToMany(User,
  {
    through: UserTelephone,
    foreignKey: 'telefone_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'

  });
