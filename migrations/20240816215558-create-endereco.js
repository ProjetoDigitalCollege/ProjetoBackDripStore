'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('endereco', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rua: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      bairro: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      cep: {
        type: Sequelize.STRING(9),
        allowNull: false,
        unique: true
      },
      complemento: {
        type: Sequelize.STRING(50),
        allowNull: true
      }
    });

    // Adicionar constraints de validação com CHECK
    await queryInterface.sequelize.query(`
      ALTER TABLE "endereco"
      ADD CONSTRAINT "check_cep2"
      CHECK (cep ~ '^[0-9]{5}-[0-9]{3}$');
    `);

    await queryInterface.addConstraint('endereco', {
      fields: ['cep'],
      type: 'unique',
      name: 'endereco_cep_key2'
    });

  },
  down: async (queryInterface, Sequelize) => {
    // Remover constraints antes de dropar a tabela
    await queryInterface.sequelize.query(`
      ALTER TABLE "endereco"
      DROP CONSTRAINT "check_cep";
    `);

    await queryInterface.dropTable('endereco');
  }
};
