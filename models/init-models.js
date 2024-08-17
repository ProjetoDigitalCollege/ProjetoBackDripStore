import { Sequelize, DataTypes } from 'sequelize';
import _categoria from './categoria.js';
import _endereco from './endereco.js';
import _endereco_usuario from './endereco_usuario.js';
import _imagem from './imagem.js';
import _opcoes_produtos from './opcoes_produtos.js';
import _pedido from './pedido.js';
import _produto from './produto.js';
import _produto_categoria from './produto_categoria.js';
import _produto_imagem from './produto_imagem.js';
import _telefone from './telefone.js';
import _telefone_usuario from './telefone_usuario.js';
import _usuario from './usuario.js';
import _vendas from './vendas.js';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

function initModels() {
  const categoria = _categoria(sequelize, DataTypes);
  const endereco = _endereco(sequelize, DataTypes);
  const endereco_usuario = _endereco_usuario(sequelize, DataTypes);
  const imagem = _imagem(sequelize, DataTypes);
  const opcoes_produtos = _opcoes_produtos(sequelize, DataTypes);
  const pedido = _pedido(sequelize, DataTypes);
  const produto = _produto(sequelize, DataTypes);
  const produto_categoria = _produto_categoria(sequelize, DataTypes);
  const produto_imagem = _produto_imagem(sequelize, DataTypes);
  const telefone = _telefone(sequelize, DataTypes);
  const telefone_usuario = _telefone_usuario(sequelize, DataTypes);
  const usuario = _usuario(sequelize, DataTypes);
  const vendas = _vendas(sequelize, DataTypes);

  // Definições das associações
  produto_categoria.belongsTo(categoria, { as: "categorium", foreignKey: "categoria_id" });
  categoria.hasMany(produto_categoria, { as: "produto_categoria", foreignKey: "categoria_id" });
  endereco_usuario.belongsTo(endereco, { as: "endereco", foreignKey: "endereco_id" });
  endereco.hasMany(endereco_usuario, { as: "endereco_usuarios", foreignKey: "endereco_id" });
  produto_imagem.belongsTo(imagem, { as: "imagem", foreignKey: "imagem_id" });
  imagem.hasMany(produto_imagem, { as: "produto_imagems", foreignKey: "imagem_id" });
  opcoes_produtos.belongsTo(produto, { as: "produto", foreignKey: "produto_id" });
  produto.hasMany(opcoes_produtos, { as: "opcoes_produtos", foreignKey: "produto_id" });
  pedido.belongsTo(produto, { as: "produto", foreignKey: "produto_id" });
  produto.hasMany(pedido, { as: "pedidos", foreignKey: "produto_id" });
  produto_categoria.belongsTo(produto, { as: "produto", foreignKey: "produto_id" });
  produto.hasMany(produto_categoria, { as: "produto_categoria", foreignKey: "produto_id" });
  produto_imagem.belongsTo(produto, { as: "produto", foreignKey: "produto_id" });
  produto.hasMany(produto_imagem, { as: "produto_imagems", foreignKey: "produto_id" });
  telefone_usuario.belongsTo(telefone, { as: "telefone", foreignKey: "telefone_id" });
  telefone.hasMany(telefone_usuario, { as: "telefone_usuarios", foreignKey: "telefone_id" });
  endereco_usuario.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id" });
  usuario.hasMany(endereco_usuario, { as: "endereco_usuarios", foreignKey: "usuario_id" });
  telefone_usuario.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id" });
  usuario.hasMany(telefone_usuario, { as: "telefone_usuarios", foreignKey: "usuario_id" });
  vendas.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id" });
  usuario.hasMany(vendas, { as: "vendas", foreignKey: "usuario_id" });
  pedido.belongsTo(vendas, { as: "venda", foreignKey: "venda_id" });
  vendas.hasMany(pedido, { as: "pedidos", foreignKey: "venda_id" });

  return {
    categoria,
    endereco,
    endereco_usuario,
    imagem,
    opcoes_produtos,
    pedido,
    produto,
    produto_categoria,
    produto_imagem,
    telefone,
    telefone_usuario,
    usuario,
    vendas,
  };
}

export { sequelize, initModels };
