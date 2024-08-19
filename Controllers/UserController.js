import { Usuario } from "../Models/11.Usuario.js";

// Get - Listar todos os usuários
export const getAllUsers = async (request, response) => {
  try {
    const users = await Usuario.findAll();
    response.status(200).json(users);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

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
      response.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

// Update a user by ID
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await User.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedUser = await User.findByPk(id);
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.destroy({
      where: { id: id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
