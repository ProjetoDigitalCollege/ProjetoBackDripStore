const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "usuario_email_key"
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: "usuario_cpf_key"
    }
  }, {
    sequelize,
    tableName: 'usuario',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_usuario",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "usuario_cpf_key",
        unique: true,
        fields: [
          { name: "cpf" },
        ]
      },
      {
        name: "usuario_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
