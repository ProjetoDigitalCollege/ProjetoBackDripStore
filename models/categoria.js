import { DataTypes } from 'sequelize';

export default function(sequelize) {
  return sequelize.define('categoria', {
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
    slug: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    use_in_menu: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'categoria',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "pk_categoria",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
