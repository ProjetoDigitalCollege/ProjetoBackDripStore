import { Produtos_Imagem } from '../Models/6.Produtos_Imagem.js';

export const seedProdutoImagens = async () => {
  console.log('Iniciando inserção de produto-imagens...');
  const produtoImagens = [
    { produto_id: 1, imagem_id: 1 },
    { produto_id: 2, imagem_id: 2 },
    { produto_id: 3, imagem_id: 3 },
    { produto_id: 4, imagem_id: 4 },
    { produto_id: 5, imagem_id: 5 },
    { produto_id: 6, imagem_id: 6 },
    { produto_id: 7, imagem_id: 7 },
    { produto_id: 8, imagem_id: 8 },
    { produto_id: 9, imagem_id: 9 },
    { produto_id: 10, imagem_id: 10 },
    { produto_id: 11, imagem_id: 11 },
    { produto_id: 12, imagem_id: 12 },
    { produto_id: 13, imagem_id: 13 },
    { produto_id: 14, imagem_id: 14 },
    { produto_id: 15, imagem_id: 15 }
  ];


  try {
    await Produtos_Imagem.bulkCreate(produtoImagens);
    console.log('Produto_Imagem inserido com sucesso');
  } catch (error) {
    console.error('Erro ao inserir Produto_Imagem:', error);
  }
};

