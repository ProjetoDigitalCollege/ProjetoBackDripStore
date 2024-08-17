// sequelize-cli não suporta ESM
'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('imagem', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true, // Define a chave primária
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
  },{
    timestamps: true,
    tableName: 'imagem'
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('imagem');
}
