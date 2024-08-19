import { Endereco } from "../Models/2.Endereco.js"

export const getAllAddresses = async (request, response) => {
  try {
    const endereco = await Endereco.findAll();
    response.status(200).json(endereco);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export const getAddressById = async (request, response) => {
  try {
    const { id } = request.params;
    const endereco = await Endereco.findByPk(id);
    if (endereco) {
      response.status(200).json(endereco);
    } else {
      response.status(404).json({ message: 'Endereço não encontrado' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export const createAddress = async (request, response) => {
  try {
    const endereco = await Endereco.create(request.body);
    response.status(201).json(endereco);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export const updateAddress = async (request, response) => {
  try {
    const { id } = request.params;
    const [updated] = await Endereco.update(request.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedAddress = await Endereco.findByPk(id);
      response.status(200).json(updatedAddress);
    } else {
      response.status(404).json({ message: 'Endereço não encontrado' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export const deleteAddress = async (request, response) => {
  try {
    const { id } = request.params;
    const deleted = await Endereco.destroy({
      where: { id: id }
    });
    if (deleted) {
      response.status(204).send();
    } else {
      response.status(404).json({ message: 'Endereço não encontrado' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};
