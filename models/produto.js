import { DataTypes } from 'sequelize';

export default function(sequelize) {
  return sequelize.define('produto', {
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
    slug: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    marca: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    use_in_menu: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    price_with_discount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'produto',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_produto",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
