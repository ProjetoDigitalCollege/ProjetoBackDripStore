// sequelize-cli não suporta ESM
'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('vendas', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    usuario_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id'
      }
    },
    valor_total: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
  },{
    timestamps: true,
    tableName: 'vendas'
  });

}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('vendas');
}
