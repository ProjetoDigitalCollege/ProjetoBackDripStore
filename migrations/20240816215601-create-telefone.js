// sequelize-cli não suporta ESM
'use strict';

export async function up(queryInterface, Sequelize) {
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
  },{
    timestamps: true,
    tableName: 'telefone'
  });

}
export async function down(queryInterface, Sequelize) {
  await queryInterface.removeConstraint('telefone', 'telefone_telefone_key');
  await queryInterface.removeConstraint('telefone', 'pk_telefone');

  await queryInterface.dropTable('telefone');
}
