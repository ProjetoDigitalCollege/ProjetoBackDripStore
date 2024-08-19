import { Categoria } from "../Models/1.Categoria.js";

/**
 * @swagger
 * tags:
 *   name: Categorias
 *   description: Endpoints para gerenciar categorias
 */

/**
 * @swagger
 * /api/categorias:
 *   get:
 *     summary: Retorna todas as categorias
 *     tags: [Categorias]
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Categoria'
 *       500:
 *         description: Erro interno do servidor
 */
export const getAllCategories = async (request, response) => {
  try {
    const categoria = await Categoria.findAll();
    response.status(200).json(categoria);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};
/**
 * @swagger
 * /api/categorias/{id}:
 *   get:
 *     summary: Retorna uma categoria pelo ID
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: O ID da categoria
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 *       404:
 *         description: Categoria não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
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
/**
 * @swagger
 * /api/categorias:
 *   post:
 *     summary: Cria uma nova categoria
 *     tags: [Categorias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categoria'
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 *       500:
 *         description: Erro interno do servidor
 */
export const createCategory = async (request, response) => {
  try {
    const categoria = await Categoria.create(request.body);
    response.status(201).json(categoria);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};
/**
 * @swagger
 * /api/categorias/{id}:
 *   put:
 *     summary: Atualiza uma categoria pelo ID
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: O ID da categoria
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categoria'
 *     responses:
 *       200:
 *         description: Categoria atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 *       404:
 *         description: Categoria não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
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
/**
 * @swagger
 * /api/categorias/{id}:
 *   delete:
 *     summary: Deleta uma categoria pelo ID
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: O ID da categoria
 *     responses:
 *       204:
 *         description: Categoria deletada com sucesso
 *       404:
 *         description: Categoria não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
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
