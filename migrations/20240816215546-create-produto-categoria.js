'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('produto_categoria', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      categoria_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'categoria',
          key: 'id'
        }
      },
      produto_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'produto',
          key: 'id'
        }
      }
    });

    
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('produto_categoria');
  }
};
