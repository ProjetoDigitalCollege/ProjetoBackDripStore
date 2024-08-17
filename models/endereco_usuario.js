import { DataTypes } from 'sequelize';

export default function(sequelize) {
  return sequelize.define('endereco_usuario', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    endereco_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'endereco',
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
    tableName: 'endereco_usuario',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "pk_endereco_usuario",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
