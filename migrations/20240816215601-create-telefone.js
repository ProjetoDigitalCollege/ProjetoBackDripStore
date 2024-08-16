'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('telefone', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      telefone: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true
      }
    });

  },
  down: async (queryInterface, Sequelize) => {
    // Remover constraints antes de dropar a tabela
    await queryInterface.removeConstraint('telefone', 'telefone_telefone_key');
    await queryInterface.removeConstraint('telefone', 'pk_telefone');

    await queryInterface.dropTable('telefone');
  }
};
