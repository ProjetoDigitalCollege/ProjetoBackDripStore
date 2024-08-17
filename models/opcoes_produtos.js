import { DataTypes } from 'sequelize';

export default function(sequelize) {
  return sequelize.define('opcoes_produtos', {
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
    title: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    shape: {
      type: DataTypes.ENUM("square","circle"),
      allowNull: true,
      defaultValue: "square"
    },
    radiu: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "text"
    },
    values: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'opcoes_produtos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_opcoes_produtos",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
