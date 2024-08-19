import { Usuario } from "../Models/11.Usuario.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registra um novo usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *               cpf:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Realiza o login do usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       401:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro no servidor
 */

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

