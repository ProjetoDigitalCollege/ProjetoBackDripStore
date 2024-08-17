// sequelize-cli não suporta ESM
'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('pedido', {
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
    venda_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'vendas',
        key: 'id'
      }
    }
  });


}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('pedido');
}
