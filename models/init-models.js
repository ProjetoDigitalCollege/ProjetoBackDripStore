var DataTypes = require("sequelize").DataTypes;
var _categoria = require("./categoria");
var _endereco = require("./endereco");
var _endereco_usuario = require("./endereco_usuario");
var _imagem = require("./imagem");
var _opcoes_produtos = require("./opcoes_produtos");
var _pedido = require("./pedido");
var _produto = require("./produto");
var _produto_categoria = require("./produto_categoria");
var _produto_imagem = require("./produto_imagem");
var _telefone = require("./telefone");
var _telefone_usuario = require("./telefone_usuario");
var _usuario = require("./usuario");
var _vendas = require("./vendas");

function initModels(sequelize) {
  var categoria = _categoria(sequelize, DataTypes);
  var endereco = _endereco(sequelize, DataTypes);
  var endereco_usuario = _endereco_usuario(sequelize, DataTypes);
  var imagem = _imagem(sequelize, DataTypes);
  var opcoes_produtos = _opcoes_produtos(sequelize, DataTypes);
  var pedido = _pedido(sequelize, DataTypes);
  var produto = _produto(sequelize, DataTypes);
  var produto_categoria = _produto_categoria(sequelize, DataTypes);
  var produto_imagem = _produto_imagem(sequelize, DataTypes);
  var telefone = _telefone(sequelize, DataTypes);
  var telefone_usuario = _telefone_usuario(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);
  var vendas = _vendas(sequelize, DataTypes);

  produto_categoria.belongsTo(categoria, { as: "categorium", foreignKey: "categoria_id"});
  categoria.hasMany(produto_categoria, { as: "produto_categoria", foreignKey: "categoria_id"});
  endereco_usuario.belongsTo(endereco, { as: "endereco", foreignKey: "endereco_id"});
  endereco.hasMany(endereco_usuario, { as: "endereco_usuarios", foreignKey: "endereco_id"});
  produto_imagem.belongsTo(imagem, { as: "imagem", foreignKey: "imagem_id"});
  imagem.hasMany(produto_imagem, { as: "produto_imagems", foreignKey: "imagem_id"});
  opcoes_produtos.belongsTo(produto, { as: "produto", foreignKey: "produto_id"});
  produto.hasMany(opcoes_produtos, { as: "opcoes_produtos", foreignKey: "produto_id"});
  pedido.belongsTo(produto, { as: "produto", foreignKey: "produto_id"});
  produto.hasMany(pedido, { as: "pedidos", foreignKey: "produto_id"});
  produto_categoria.belongsTo(produto, { as: "produto", foreignKey: "produto_id"});
  produto.hasMany(produto_categoria, { as: "produto_categoria", foreignKey: "produto_id"});
  produto_imagem.belongsTo(produto, { as: "produto", foreignKey: "produto_id"});
  produto.hasMany(produto_imagem, { as: "produto_imagems", foreignKey: "produto_id"});
  telefone_usuario.belongsTo(telefone, { as: "telefone", foreignKey: "telefone_id"});
  telefone.hasMany(telefone_usuario, { as: "telefone_usuarios", foreignKey: "telefone_id"});
  endereco_usuario.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(endereco_usuario, { as: "endereco_usuarios", foreignKey: "usuario_id"});
  telefone_usuario.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(telefone_usuario, { as: "telefone_usuarios", foreignKey: "usuario_id"});
  vendas.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(vendas, { as: "vendas", foreignKey: "usuario_id"});
  pedido.belongsTo(vendas, { as: "venda", foreignKey: "venda_id"});
  vendas.hasMany(pedido, { as: "pedidos", foreignKey: "venda_id"});

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
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
