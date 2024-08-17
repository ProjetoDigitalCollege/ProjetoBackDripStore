'use strict';

export async function up(queryInterface, Sequelize) {
  const categorias = [];
  for (let i = 1; i <= 20; i++) {
    categorias.push({
      nome: `Categoria ${i}`,
      slug: `categoria-${i}`,
      use_in_menu: i % 2 === 0, // Alterna entre true e false
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }

  await queryInterface.bulkInsert('categoria', categorias, {});
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('categoria', null, {});
}