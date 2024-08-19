import { Produto } from "../Models/4.Produto.js";

export const getAllProducts = async (request, response) => {
  try {
    const produto = await Produto.findAll();
    response.status(200).json(produto);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export const getProductById = async (request, response) => {
  try {
    const { id } = request.params;
    const produto = await Produto.findByPk(id);
    if (produto) {
      response.status(200).json(produto);
    } else {
      response.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export const createProduct = async (request, response) => {
  try {
    const produto = await Produto.create(request.body);
    response.status(201).json(produto);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export const updateProduct = async (request, response) => {
  try {
    const { id } = request.params;
    const [updated] = await Produto.update(request.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedProduct = await Produto.findByPk(id);
      response.status(200).json(updatedProduct);
    } else {
      response.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export const deleteProduct = async (request, response) => {
  try {
    const { id } = request.params;
    const deleted = await Produto.destroy({
      where: { id: id }
    });
    if (deleted) {
      response.status(204).send();
    } else {
      response.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

