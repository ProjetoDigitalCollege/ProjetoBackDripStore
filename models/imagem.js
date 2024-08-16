const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
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
    timestamps: false,
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
