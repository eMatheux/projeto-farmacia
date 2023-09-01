import axios from 'axios'; //Biblioteca para fazer requisições
const api = axios.create({ //Serviço criado para tornar a url da api como principal
  baseURL: import.meta.env.VITE_API_URL //Usando variáveis de ambiente
});

export { api };