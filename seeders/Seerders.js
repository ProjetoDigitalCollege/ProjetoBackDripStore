import { seedImagens } from './seeder-imagens.js';
import { seedProdutos } from './seeder-produtos.js';
import { seedProdutoImagens } from './seeder-produto-imagem.js';

export const runSeeders = async () => {
          await seedImagens(); 
          await seedProdutos(); 
          await seedProdutoImagens(); 
};
