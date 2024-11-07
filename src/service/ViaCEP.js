import axios from 'axios';

const buscarCEP = async (cep) => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar CEP:', error);
  }
};

export default buscarCEP;