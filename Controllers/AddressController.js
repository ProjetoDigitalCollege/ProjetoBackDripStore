import { Endereco } from "../Models/2.Endereco.js"

export const getAllAddresses = async (req, res) => {
  try {
    const endereco = await Endereco.findAll();
    res.status(200).json(endereco);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAddressById = async (req, res) => {
  try {
    const { id } = req.params;
    const endereco = await Endereco.findByPk(id);
    if (endereco) {
      res.status(200).json(endereco);
    } else {
      res.status(404).json({ message: 'Endereço não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createAddress = async (req, res) => {
  try {
    const endereco = await Endereco.create(req.body);
    res.status(201).json(endereco);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Endereco.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedAddress = await Endereco.findByPk(id);
      res.status(200).json(updatedAddress);
    } else {
      res.status(404).json({ message: 'Endereço não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Endereco.destroy({
      where: { id: id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Endereço não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
