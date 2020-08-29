import axios from 'axios';

const axiosQuote = axios.create({
  baseURL: 'https://blog-app-59720.firebaseio.com/',
});

export default axiosQuote;