// sequelize-cli não suporta ESM
'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('produto', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    enabled: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    slug: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    marca: {
      type: Sequelize.STRING(30),
      allowNull: true
    },
    use_in_menu: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    stock: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    description: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    price_with_discount: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    }
  },{
    timestamps: true,
    tableName: 'produto'
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('produto');
}
