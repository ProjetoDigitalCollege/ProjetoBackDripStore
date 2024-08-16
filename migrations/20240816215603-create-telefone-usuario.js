'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('telefone_usuario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      telefone_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'telefone',
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
    // Remover constraints antes de dropar a tabela
    await queryInterface.removeConstraint('telefone_usuario', 'fk_telefone');
    await queryInterface.removeConstraint('telefone_usuario', 'fk_usuario');

    await queryInterface.dropTable('telefone_usuario');
  }
};
