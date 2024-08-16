'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('vendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id'
        }
      },
      valor_total: {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    });

    
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('vendas');
  }
};
