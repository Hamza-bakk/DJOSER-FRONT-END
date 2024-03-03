import  { Fragment } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../config';

const UserConfirmation = () => {
  const { uid, token } = useParams();
  const navigate = useNavigate();
  
  const activeClick = () => {
    axios.post(`${API_URL}/auth/users/activation/`, { uid: uid, token: token })
      .then(() => {
        navigate('/login');
      })
      .catch(err => {
        alert(err.response.data);
      });
  };
  
  return (
    <Fragment>
      <button onClick={activeClick} className="h-screen w-full items-center justify-center text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Activate Now
      </button>
    </Fragment>
  );
};

export default UserConfirmation;
