'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('imagem', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,  // Define a chave primária
        type: Sequelize.INTEGER
      },
      enabled: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      path: {
        type: Sequelize.STRING(200),
        allowNull: false
      }
    });
    // Remova a adição da chave primária com addConstraint
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('imagem');
  }
};
