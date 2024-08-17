// sequelize-cli não suporta ESM
'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('categoria', {
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
    slug: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    use_in_menu: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    }
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('categoria');
}
