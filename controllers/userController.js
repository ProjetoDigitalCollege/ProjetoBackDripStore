import User from "../models/Usuario.js";


// Get - Listar todos os usuários
const getAllUsers = async (request, response) => {
    const users = await usuario.findAll();

    response.json(users);
};

// Get - Listar usuário por ID
const getUserById = async (request, response, next) => {
    const userId = parseInt(request.params.id);
    const user = await usuario.findByPk(userId,);

    if(!user) {
        const error = new Error("Usuário não encontrado!");
        error.statusCode = 404;
        response.json({ user:  null });
    }

    const orders = await user.getOrders();
    response.json({ ...user.toJSON(), orders });
};

// Post - Criar Usuário
const createUser = async (request, response) => {
    try {
        const {nome, email, password} = request.body;
        console.log('Dados Enviados: ', nome, email, password);

        const usuarioExiste = await User.findOne({ where: {email}})
        if (usuarioExiste) {
            return response.status(409).json({ message: 'Email já está em uso.' })
        }

        const novoUsuario = await User.create({ nome, email, password});
        console.log('Usuário Cadastrado: ' , novoUsuario);
        
        response.status(201).json(novoUsuario);
    } catch(error) {
        console.log('Estes dados já estão em uso.');
        response.status(500).json({ error: 'Estes dados já estão em uso'})
    }
};

// Put - Atualizar dados do usuário
const updateUser = (request, response) => {
    const userId = parseInt(request.params.id);
    const {name, email} = request.body;

    const userIndex = users.findIndex((u) => u.id == userId);
    if (userIndex === -1) {
        return response.status(400).json({error: "Usuário não encontrado"});
    }
    users[userIndex] = {
        ...users[userIndex],
        name,
        email
    };
    response.json(users[userIndex]);
};

// Delete - Apagar usuário
const deleteUser = async (request, response) => {
    const userId = parseInt(request.params.id);
    await usuario.deleteById(userId);
    response.json({message: "Usuário deletado com sucesso!"})
};

export default {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}