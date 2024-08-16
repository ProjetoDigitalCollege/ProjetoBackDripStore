'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      username: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true
      }
    });

    // Adicionar as constraints de validação com CHECK
    await queryInterface.sequelize.query(`
      ALTER TABLE "usuario"
      ADD CONSTRAINT "check_email"
      CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}$');
    `);

    await queryInterface.sequelize.query(`
      ALTER TABLE "usuario"
      ADD CONSTRAINT "check_cpf"
      CHECK (cpf ~ '^[0-9]{11}$');
    `);
  },
  down: async (queryInterface, Sequelize) => {
    // Remover as constraints antes de remover a tabela
    await queryInterface.sequelize.query(`
      ALTER TABLE "usuario"
      DROP CONSTRAINT "check_email";
    `);

    await queryInterface.sequelize.query(`
      ALTER TABLE "usuario"
      DROP CONSTRAINT "check_cpf";
    `);

    await queryInterface.dropTable('usuario');
  }
};
