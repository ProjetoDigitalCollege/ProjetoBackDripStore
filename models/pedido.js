import { DataTypes } from 'sequelize';

export default function(sequelize) {
  return sequelize.define('pedido', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    produto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'produto',
        key: 'id'
      }
    },
    venda_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'vendas',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'pedido',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_pedido",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
