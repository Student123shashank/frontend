import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-02np.onrender.com/api/v1', 
});

export default api;
