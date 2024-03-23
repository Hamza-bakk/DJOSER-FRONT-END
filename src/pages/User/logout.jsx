import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PostAPI } from '../../components/api/post/post';

const { LogoutUser } = PostAPI;

const Logout = () => {
  const navigate = useNavigate();

  // Exécuter handleLogout au rendu du composant
  React.useEffect(() => {
    const handleLogout = async () => {
      try {
        await LogoutUser();
        localStorage.removeItem('access_token');
        navigate('/');
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la déconnexion :', error);
      }
    };
    handleLogout();
  },);

  return (
    <div>
      
    </div>
  );
};

export default Logout;
