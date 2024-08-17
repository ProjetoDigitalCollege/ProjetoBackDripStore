import { DataTypes } from 'sequelize';

export default function(sequelize) {
  return sequelize.define('produto_imagem', {
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
    imagem_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'imagem',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'produto_imagem',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_produto_imagem",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
