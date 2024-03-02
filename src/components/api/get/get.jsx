
import { API_URL } from '../../../../config';
import axios from 'axios';
import {userAtom } from '../../../stores/userAtom'


export const GetApi = {
    

    UserLogin: async (token) => {
        console.log(`J'ai réussi a avoir le token `, token)
      try {
        // Configuration de l'en-tête Authorization avec le token JWT
        const config = {
          headers: {
            Authorization: `JWT ${token}`
          }
        };
  
        // Faire la requête GET pour récupérer les infos de l'utilisateur
        const response = await axios.get(`${API_URL}/auth/users/me/`, config);
  
        // Récupérer les infos de l'utilisateur depuis la réponse
        const userData = response.data;
        localStorage.setItem("access_token", token);
  
        // Afficher les infos de l'utilisateur dans la console
        console.log('User data:', userData);
  
        // Vous pouvez retourner les infos de l'utilisateur si nécessaire
        return userData;
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
      }
    },
  
    // Autres méthodes...
  };