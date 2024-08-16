const produto = require('../models/produto')

const getAllProducts = async (req, res) => {
  const products = await produto.findAll();

  res.json(products);
};

const getProductById = async (req, res, next) => {
  const productId = parseInt(req.params.id);
  const product = await produto.findByPk(productId,);

  if(!product) {
      const error = new Error("Usuário não encontrado!");
      error.statusCode = 404;
      res.json({ product:  null });
  }

  const orders = await product.getOrders();

  res.json({ ...product.toJSON(), orders });
};

const createProduct = async (req, res) => {
  const {name, id, price } = req.body;
  if(!name || !id || price) {
      return res
      .status(400)
      .json({error: "Informe os dados corretamente"});
  }
  const newProduct = {
      name,
      id,
      price
  }

  await produto.create(newProduct);
  res.status(201).json(id);
};

const updateProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const {name, id} = req.body;

  const productIndex = products.findIndex((p) => p.id == productId);
  if (productIndex === -1) {
      return res.status(400).json({error: "Produto não encontrado"});
  }
  products[productIndex] = {
      ...users[userIndex],
      name,
      email
  };
  res.json(users[userIndex]);
};

module.exports = {

}