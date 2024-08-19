import { Usuario } from "../Models/11.Usuario.js";

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Erro no servidor
 */

// Get - Listar todos os usuários
export const getAllUsers = async (request, response) => {
  try {
    const users = await Usuario.findAll();
    response.status(200).json(users);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Busca um usuário por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro no servidor
 */
// Get - Listar usuário por ID
export const getUserById = async (request, response) => {
  try {
    const userId = parseInt(request.params.id);
    const user = await Usuario.findByPk(userId);

    if (!user) {
      const error = new Error("Usuário não encontrado!");
      error.statusCode = 404;
      response.json({ user: null });
    } else {
      response.status(200).json({ user });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};
/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualiza os dados de um usuário existente
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome do usuário
 *               email:
 *                 type: string
 *                 description: E-mail do usuário
 *               senha:
 *                 type: string
 *                 description: Senha do usuário
 *             example:
 *               nome: João Atualizado
 *               email: joao.atualizado@example.com
 *               senha: novaSenha123
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuário não encontrado
 *       400:
 *         description: Dados inválidos fornecidos
 *       500:
 *         description: Erro no servidor
 */
// Update a user by ID
export const updateUser = async (request, response) => {
  try {
    const { id } = request.params;
    const [updated] = await Usuario.update(request.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedUser = await Usuario.findByPk(id);
      return response.status(200).json(updatedUser);
    } else {
      return response.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};
/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Remove um usuário pelo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário a ser deletado
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro no servidor
 */
// Delete a user by ID
export const deleteUser = async (request, response) => {
  try {
    const { id } = request.params;
    const deleted = await Usuario.destroy({
      where: { id: id }
    });
    if (deleted) {
      response.status(204).send();
    } else {
      response.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};
