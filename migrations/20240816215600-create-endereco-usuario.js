'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('endereco_usuario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      endereco_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'endereco',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id'
        },
        onDelete: 'CASCADE'
      }
    });

  },
  down: async (queryInterface, Sequelize) => {
    // Remover as constraints antes de dropar a tabela
    await queryInterface.removeConstraint('endereco_usuario', 'fk_endereco');
    await queryInterface.removeConstraint('endereco_usuario', 'fk_usuario');
    
    await queryInterface.dropTable('endereco_usuario');
  }
};
