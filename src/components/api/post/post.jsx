
import axios from 'axios';
import { API_URL } from '../../../../config';


export const PostAPI = {

  RegisterUser: async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/auth/users/`, credentials);
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  },


  JwtCreate: async (credentials) => {
    try {
      console.log('Credentials sent to the API request:', credentials);

      const response = await axios.post(`${API_URL}/auth/jwt/create/`, credentials);

      const userData = response.data;
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
  },

  
  LogoutUser: async () => {
    try {
      const token = localStorage.getItem("access_token");
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post(`${API_URL}/auth/jwt/verify/`, { token });
      if (token === token) {
        localStorage.removeItem("access_token");
      } else {
        console.error('Échec de la vérification du token');
      }
    } catch (error) {
      console.error('Error logging out:', error);
      throw error;
    }
  },


 Userconfirmation: async (uid, token) => {
  try {
    const response = await axios.post(`${API_URL}/auth/users/activation/`, { uid: uid, token: token });
    return response.data;
  } catch (error) {
    console.error('Error activating user:', error);
    throw error;
  }
},




  // Autres méthodes...
};
