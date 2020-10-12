import axios from 'axios';

const firebaseApi = axios.create({
  baseURL: 'https://firestore.googleapis.com/v1/projects/react-shop-d6689/databases/(default)/documents/',
});

firebaseApi.interceptors.response.use(({ data }) => data);

export default firebaseApi;
