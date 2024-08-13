'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      enabled: {
        type: Sequelize.BOOLEAN
      },
      slug: {
        type: Sequelize.STRING
      },
      use_in_menu: {
        type: Sequelize.BOOLEAN
      },
      stock: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      price_with_discount: {
        type: Sequelize.DECIMAL
      },
      categoria_id: {
        type: Sequelize.INTEGER
      },
      marca: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Produtos');
  }
};