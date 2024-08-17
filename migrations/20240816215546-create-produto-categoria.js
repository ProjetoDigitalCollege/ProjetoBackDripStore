// sequelize-cli não suporta ESM
'use strict';

export async function up(queryInterface, Sequelize) {
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


}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('produto_categoria');
}
