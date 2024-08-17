import { DataTypes } from 'sequelize';

export default function(sequelize) {
  return sequelize.define('telefone', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    telefone: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: "telefone_telefone_key"
    }
  }, {
    sequelize,
    tableName: 'telefone',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "pk_telefone",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "telefone_telefone_key",
        unique: true,
        fields: [
          { name: "telefone" },
        ]
      },
    ]
  });
};
