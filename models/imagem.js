import { DataTypes } from 'sequelize';

export default function(sequelize) {
  return sequelize.define('imagem', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    path: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'imagem',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "pk_imagem",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
