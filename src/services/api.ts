import axios from 'axios';
import { Platform } from 'react-native';
import { API_URL_IOS, API_URL_ANDROID } from 'react-native-dotenv';

const api = axios.create({
  baseURL: Platform.OS === 'ios' ? API_URL_IOS : API_URL_ANDROID,
});

export default api;
