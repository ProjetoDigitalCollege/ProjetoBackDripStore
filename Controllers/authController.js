import { Usuario } from "../Models/11.Usuario.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
      try {
    
        const { nome, email, senha, cpf } = req.body;

        const saltRounds = 12; // número de rounds de salt
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const users = await Usuario.create({ nome, email, senha: hashedPassword, cpf });
    
        res.status(201).json(users);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };

export const authController = {
    async register(req, res) {
        try {
            const { nome, email, senha, cpf  } = req.body;
            const saltRounds = 12; 
            const hashedPassword = await bcrypt.hash(senha, saltRounds);
            const user = await Usuario.create({ nome, email, senha:hashedPassword, cpf  });
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async login(req, res) {
        try {
            const { email, senha } = req.body;
            const user = await Usuario.findOne({ where: { email } });

            if (!user || !bcrypt.compareSync(senha, user.senha)) {
                return res.status(401).json({ message: 'Credencias inválidas' });
            }

            const token = jwt.sign({ id: user.id, name: user.nome, createdAt: user.createdAt }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } catch (error) {
            res.status(500).json({ error: error.message });
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