import { DataTypes } from 'sequelize';

export default function(sequelize) {
  return sequelize.define('vendas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id'
      }
    },
    valor_total: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vendas',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_vendas",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
