import { Usuario } from "../Models/11.Usuario.js";
import { doCompare, doHash } from "../Middlewares/Hash.js";

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
// export const getUserById = async (request, response, next) => {
//   const userId = parseInt(request.params.id);
//   const user = await User.findByPk(userId,);

//   if(!user) {
//       const error = new Error("Usuário não encontrado!");
//       error.statusCode = 404;
//       response.json({ user:  null });
//   }
// };

// Post - Criar Usuário
export const registerUser = async (req, res) => {
  try {

    const { nome, email, senha, cpf } = req.body;

    const hashedPassword = doHash(senha);
    const users = await Usuario.create({nome, email, senha: hashedPassword, cpf});

    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST - LOGIN

export const loginUser = async (request, response) => {
  try {
    const { email, senha} = request.body;
    const user = await Usuario.findOne({ where: { email } });

    if(doCompare(senha, user.senha)) {
      response.status(200).json({message: 'Login efetuado com sucesso!'});
    } else {
      response.status(401).json({ error: 'Credenciais inválidas!' });
    }

  } catch (error) {
    console.log(error);
  };
};
