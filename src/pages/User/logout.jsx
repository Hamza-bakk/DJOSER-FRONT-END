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
        // Appeler la fonction LogoutUser pour déconnecter l'utilisateur
        await LogoutUser();

        // Supprimer le token du localStorage
        localStorage.removeItem('access_token');

        // Rediriger vers la page de connexion après la déconnexion
        navigate('/');

        console.log('Déconnexion réussie');
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
