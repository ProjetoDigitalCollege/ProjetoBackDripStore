// sequelize-cli não suporta ESM
'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('endereco_usuario', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    endereco_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'endereco',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    usuario_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id'
      },
      onDelete: 'CASCADE'
    }
  });

}
export async function down(queryInterface, Sequelize) {
  await queryInterface.removeConstraint('endereco_usuario', 'fk_endereco');
  await queryInterface.removeConstraint('endereco_usuario', 'fk_usuario');

  await queryInterface.dropTable('endereco_usuario');
}
