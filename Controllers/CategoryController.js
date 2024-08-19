import { Categoria } from "../Models/1.Categoria.js";

export const getAllCategories = async (request, response) => {
  try {
    const categoria = await Categoria.findAll();
    response.status(200).json(categoria);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export const getCategoryById = async (request, response) => {
  try {
    const { id } = request.params;
    const categoria = await Categoria.findByPk(id);
    if (categoria) {
      response.status(200).json(categoria);
    } else {
      response.status(404).json({ message: 'Categoria não encontrada' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export const createCategory = async (request, response) => {
  try {
    const categoria = await Categoria.create(request.body);
    response.status(201).json(categoria);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export const updateCategory = async (request, response) => {
  try {
    const { id } = request.params;
    const [updated] = await Categoria.update(request.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedCategory = await Categoria.findByPk(id);
      response.status(200).json(updatedCategory);
    } else {
      response.status(404).json({ message: 'Categoria não encontrada' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export const deleteCategory = async (request, response) => {
  try {
    const { id } = request.params;
    const deleted = await Categoria.destroy({
      where: { id: id }
    });
    if (deleted) {
      response.status(204).send();
    } else {
      response.status(404).json({ message: 'Categoria não encontrada' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};
