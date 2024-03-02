
import axios from 'axios';
import { API_URL } from '../../../../config';


export const PostAPI = {
  RegisterUser: async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/auth/users/`, credentials);
      console.log(API_URL);
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
  },

  LogoutUser: async () => {
    try {
      // Récupérer le token depuis le localStorage
      const token = localStorage.getItem("access_token");
      console.log(`Token avant la déconnexion`, token);
  
      // Faire une requête POST à l'endpoint /jwt/verify/ pour vérifier le token
      const response = await axios.post(`${API_URL}/auth/jwt/verify/`, { token });
      console.log(response);
  
      // Vérifier si la vérification du token a réussi
      if ( token === token) {
        console.log('Déconnexion réussie');
        
        // Supprimer le token du stockage local
        localStorage.removeItem("access_token");
      } else {
        console.error('Échec de la vérification du token');
      }
    } catch (error) {
      console.error('Error logging out:', error);
      throw error;
    }
  }
  
  



  // Autres méthodes...
};
