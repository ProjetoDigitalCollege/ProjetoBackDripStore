import { Endereco } from "../Models/Endereco.js"

// GET 
export const getAllAddress = async (req, res) => {
    try {
        const address = await Endereco.findAll();
        res.status(200).json(address);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST

export const registerAddress = async (req, res) => {
    try {
        const { endereco, bairro, cidadde, cep, complemento } = req.body;
        const address = await Endereco.create({ endereco, bairro, cidadde, cep, complemento });
        res.status(201).json(address);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};