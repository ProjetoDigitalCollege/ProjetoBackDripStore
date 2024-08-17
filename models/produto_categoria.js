import { DataTypes } from 'sequelize';

export default function(sequelize) {
  return sequelize.define('produto_categoria', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categoria',
        key: 'id'
      }
    },
    produto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'produto',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'produto_categoria',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "pk_produto_categoria",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
