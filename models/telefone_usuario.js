import { DataTypes } from 'sequelize';

export default function(sequelize) {
  return sequelize.define('telefone_usuario', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    telefone_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'telefone',
        key: 'id'
      }
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'telefone_usuario',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_telefone_usuario",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
