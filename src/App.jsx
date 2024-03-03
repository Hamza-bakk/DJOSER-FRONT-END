import './assets/styles/globals.scss';
import HomePage from './pages/HomePage/homepage.jsx';
import Register from './pages/User/register.jsx';
import Login from './pages/User/login.jsx';
import Logout from './pages/User/logout.jsx';
import UserConfirmation from './pages/User/userconfirmation.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/auth/users/activation/:uid/:token" element={<UserConfirmation/>} />
      </Routes>
    </Router>
  );
}

export default App;
