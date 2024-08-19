import { Usuario } from "../Models/11.Usuario.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (request, response) => {
      try {
    
        const { nome, email, senha, cpf } = request.body;

        const saltRounds = 12; // número de rounds de salt
        const hashedPassword = await bcrypt.hash(senha, saltRounds);
        const users = await Usuario.create({ nome, email, senha: hashedPassword, cpf });
    
        response.status(201).json(users);
      } catch (error) {
        response.status(500).json({ error: error.message });
      }
    };

export const authController = {
    async register(request, response) {
        try {
            const { nome, email, senha, cpf  } = request.body;
            const saltRounds = 12; 
            const hashedPassword = await bcrypt.hash(senha, saltRounds);
            const user = await Usuario.create({ nome, email, senha:hashedPassword, cpf  });
            response.status(201).json(user);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    },

    async login(request, response) {
        try {
            const { email, senha } = request.body;
            const user = await Usuario.findOne({ where: { email } });

            if (!user || !bcrypt.compareSync(senha, user.senha)) {
                return response.status(401).json({ message: 'Credencias inválidas' });
            }

            const token = jwt.sign({ id: user.id, name: user.nome, createdAt: user.createdAt }, process.env.JWT_SECRET, { expiresIn: '1h' });
            response.json({ token });
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }
};


// export const loginUser = async (request, response) => {
//   try {
//     const { email, senha } = request.body;
//     const user = await Usuario.findOne({ where: { email } });

    

//   } catch (error) {
//     console.log(error);
//   };
// };