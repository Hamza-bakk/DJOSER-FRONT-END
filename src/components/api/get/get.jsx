
const API_URL = `${import.meta.env.VITE_BASE_URL}`;
import axios from 'axios';

import { userAtom } from '../../../stores/userAtom';

const [, setUser] = userAtom(userAtom);

export const fetchUserData = async (token) => {
  try {
      const response = await axios.get(`${API_URL}/auth/users/me/`, {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      });
      const userData = response.data;
      setUser(userData.id);
      return userData;
  } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
  }
};