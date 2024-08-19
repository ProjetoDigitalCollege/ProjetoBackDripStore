import { Produto } from "../Models/4.Produto.js";
import { Produtos_Imagem } from '../Models/6.Produtos_Imagem.js';
import { Image } from '../Models/3.Image.js';

/**
 * @swagger
 * tags:
 *   name: Produtos
 *   description: Gerenciamento de produtos
 */

/**
 * @swagger
 * /produtos:
 *   get:
 *     summary: Retorna todos os produtos
 *     tags: [Produtos]
 *     responses:
 *       200:
 *         description: Lista de produtos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Produto'
 *       500:
 *         description: Erro interno do servidor
 */
export const getAllProducts = async (request, response) => {
  try {
    const produto = await Produto.findAll({
      include: [
        {
          model: Image,
          through: {
            model: Produtos_Imagem,
            attributes: []
          },
          attributes: ['path']
        }
      ]
    });
    response.status(200).json(produto);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

/**
 * @swagger
 * /produtos/{id}:
 *   get:
 *     summary: Retorna um produto por ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produto
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Produto'
 *       404:
 *         description: Produto não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
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

/**
 * @swagger
 * /produtos:
 *   post:
 *     summary: Cria um novo produto
 *     tags: [Produtos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Produto'
 *     responses:
 *       201:
 *         description: Produto criado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Produto'
 *       500:
 *         description: Erro interno do servidor
 */
export const createProduct = async (request, response) => {
  try {
    const produto = await Produto.create(request.body);
    response.status(201).json(produto);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

/**
 * @swagger
 * /produtos/{id}:
 *   put:
 *     summary: Atualiza um produto existente
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produto
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Produto'
 *     responses:
 *       200:
 *         description: Produto atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Produto'
 *       404:
 *         description: Produto não encontrado
 *       500:
 *         description: Erro interno do servidor
 */

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

/**
 * @swagger
 * /produtos/{id}:
 *   delete:
 *     summary: Remove um produto por ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produto
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Produto removido com sucesso
 *       404:
 *         description: Produto não encontrado
 *       500:
 *         description: Erro interno do servidor
 */

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

