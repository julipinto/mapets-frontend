import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://script.google.com/macros/s/AKfycbyhsJfJTlLJV1OgDiljqTo9Xo_KDudik6FA2qCxhH6ltfiZsfMew-Jd-J9OZwZJKNOP/exec',
});

export default api;
