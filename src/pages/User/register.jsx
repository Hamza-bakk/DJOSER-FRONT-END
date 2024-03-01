import  { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate depuis React Router
import { RegisterUser } from '../../components/api/post/post';

const Register = () => {
  const navigate = useNavigate(); // Initialisez useNavigate à l'intérieur du composant
  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    re_password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await RegisterUser(formData);
      navigate('/');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="flex gradient-background flex-col gap-8 items-center justify-center h-screen">
      <div className="w-full flex flex-col max-w-lg p-8 gradient-background rounded-lg shadow-lg">
        <h2 className="text-3xl text-white mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white">Email:</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="input-field" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="first_name" className="text-white">First Name:</label>
            <input type="text" name="first_name" id="first_name" value={formData.first_name} onChange={handleChange} required className="input-field" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="last_name" className="text-white">Last Name:</label>
            <input type="text" name="last_name" id="last_name" value={formData.last_name} onChange={handleChange} required className="input-field" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-white">Password:</label>
            <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} required className="input-field" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="re_password" className="text-white">Confirm Password:</label>
            <input type="password" name="re_password" id="re_password" value={formData.re_password} onChange={handleChange} required className="input-field" />
          </div>
          <div className='flex justify-center items-center '>

            <button type="submit" className=" bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;