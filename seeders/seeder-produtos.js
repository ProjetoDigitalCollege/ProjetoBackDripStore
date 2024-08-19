import { Produto } from '../Models/4.Produto.js'; // Certifique-se de que o caminho está correto

export const seedProdutos = async () => {
  console.log('Iniciando inserção de produtos...');
  const produtos = [
    { slug: 'sapato-conforto-classico', marca: 'Nike', use_in_menu: true, estoque: 100, descricao: 'Sapato confortável', preco: 100.00, preco_desconto: 90.00 },
    { slug: 'sapato-elegante-moderado', marca: 'Adidas', use_in_menu: true, estoque: 150, descricao: 'Sapato elegante', preco: 120.00, preco_desconto: 84.00 },
    { slug: 'sapato-esportivo-dinamico', marca: 'Puma', use_in_menu: false, estoque: 200, descricao: 'Sapato esportivo', preco: 150.00, preco_desconto: 105.00 },
    { slug: 'sapato-casual-essencial', marca: 'Fila', use_in_menu: true, estoque: 80, descricao: 'Sapato casual', preco: 80.00, preco_desconto: 56.00 },
    { slug: 'sapato-couro-premium', marca: 'Olímpicos', use_in_menu: false, estoque: 90, descricao: 'Sapato de couro', preco: 200.00, preco_desconto: 140.00 },
    { slug: 'sapato-lona-urbano', marca: 'Nike', use_in_menu: true, estoque: 70, descricao: 'Sapato de lona', preco: 60.00, preco_desconto: 42.00 },
    { slug: 'sapato-salto-estrela', marca: 'Adidas', use_in_menu: true, estoque: 130, descricao: 'Sapato de salto', preco: 140.00, preco_desconto: 98.00 },
    { slug: 'sapato-festa-glamour', marca: 'Puma', use_in_menu: false, estoque: 110, descricao: 'Sapato de festa', preco: 160.00, preco_desconto: 112.00 },
    { slug: 'sapato-formal-prestige', marca: 'Fila', use_in_menu: true, estoque: 100, descricao: 'Sapato formal', preco: 180.00, preco_desconto: 126.00 },
    { slug: 'sapato-trabalho-resistente', marca: 'Olímpicos', use_in_menu: true, estoque: 50, descricao: 'Sapato de trabalho', preco: 90.00, preco_desconto: 63.00 },
    { slug: 'sapato-verao-leve', marca: 'Nike', use_in_menu: false, estoque: 60, descricao: 'Sapato de verão', preco: 70.00, preco_desconto: 49.00 },
    { slug: 'sapato-inverno-aquecido', marca: 'Adidas', use_in_menu: true, estoque: 90, descricao: 'Sapato de inverno', preco: 130.00, preco_desconto: 91.00 },
    { slug: 'sapato-campo-atletico', marca: 'Puma', use_in_menu: false, estoque: 110, descricao: 'Sapato de campo', preco: 110.00, preco_desconto: 77.00 },
    { slug: 'sapato-academia-energia', marca: 'Fila', use_in_menu: true, estoque: 50, descricao: 'Sapato de academia', preco: 75.00, preco_desconto: 52.50 },
    { slug: 'sapato-corrida-performance', marca: 'Olímpicos', use_in_menu: false, estoque: 85, descricao: 'Sapato de corrida', preco: 140.00, preco_desconto: 98.00 }
  ];

  try {
    await Produto.bulkCreate(produtos, { ignoreDuplicates: true }); // Adiciona a opção ignoreDuplicates para evitar erros se o seeder for executado novamente
    console.log('Produtos inseridos com sucesso');
  } catch (error) {
    console.error('Erro ao inserir produtos:', error);
  }
};
