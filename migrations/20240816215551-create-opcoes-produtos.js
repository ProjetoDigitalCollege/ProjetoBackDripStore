// sequelize-cli não suporta ESM
'use strict';

export async function up(queryInterface, Sequelize) {
  // Criando os tipos ENUM
  await queryInterface.sequelize.query("CREATE TYPE shape AS ENUM('square', 'circle');");
  await queryInterface.sequelize.query("CREATE TYPE texto AS ENUM('text');");

  await queryInterface.createTable('opcoes_produtos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    produto_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'produto',
        key: 'id'
      }
    },
    title: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    shape: {
      type: Sequelize.ENUM('square', 'circle'),
      defaultValue: 'square',
      allowNull: true
    },
    radiu: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    type: {
      type: Sequelize.ENUM('text'),
      defaultValue: 'text',
      allowNull: true
    },
    values: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
  });
}
export async function down(queryInterface, Sequelize) {
  // Removendo os tipos ENUM
  await queryInterface.dropTable('opcoes_produtos');
  await queryInterface.sequelize.query("DROP TYPE IF EXISTS shape;");
  await queryInterface.sequelize.query("DROP TYPE IF EXISTS texto;");
}
