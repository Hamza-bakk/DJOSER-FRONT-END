import axios from 'axios';
import { API_URL } from '../../../../config';


export const JwtCreate = async (credentials) => {
    try {
      console.log('Credentials sent to the API request:', credentials);
  
      const response = await axios.post(`${API_URL}/auth/jwt/create/`, credentials);
  
      const userData = response.data;
      console.log('User data retrieved:', userData);
  
      // Vérifier si un refresh token est disponible
      if (userData.refresh) {
        // Utiliser le refresh token pour obtenir un nouvel access token
        const refreshResponse = await axios.post(`${API_URL}/auth/jwt/refresh/`, { refresh: userData.refresh });
        const { access } = refreshResponse.data;
  
        // Mettre à jour les données utilisateur avec le nouvel access token
        userData.access = access;
      }
  
      return userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  };
  
