import axios from 'axios';
import settings from '../appSettings';

export default axios.create({
  baseURL: settings.apiBaseUrl
});
