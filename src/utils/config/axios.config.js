import axios from 'axios';

// Default config for AXIOS
const APIRequest = axios.create(
    {
        baseURL: 'https://randomuser.me/api',
        responseType: 'json',
        timeout: 6000
    }
)

// Configuración predeterminada para Axios
const chuckNorrisApi = axios.create({
    baseURL: 'https://api.chucknorris.io',
    responseType: 'json',
    timeout: 6000
  });

  export default APIRequest;
  export { chuckNorrisApi };