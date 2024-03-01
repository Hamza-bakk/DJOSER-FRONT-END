
import axios from 'axios';
import { API_URL } from '../../../../config';

export const RegisterUser = async (credentials) => {
  try {
      const response = await axios.post(`${API_URL}/auth/users/`, credentials);
      console.log(API_URL);
      return response.data;
  } catch (error) {
      console.error('Error logging in:', error);
      throw error;
  }
};