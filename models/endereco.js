import { DataTypes } from 'sequelize';

export default function(sequelize) {
  return sequelize.define('endereco', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rua: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    bairro: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cidade: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cep: {
      type: DataTypes.STRING(9),
      allowNull: false,
      unique: "endereco_cep_key"
    },
    complemento: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'endereco',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "endereco_cep_key",
        unique: true,
        fields: [
          { name: "cep" },
        ]
      },
      {
        name: "pk_endereco",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
