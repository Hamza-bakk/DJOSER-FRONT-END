import './assets/styles/globals.scss';
import HomePage from './pages/HomePage/homepage.jsx';
import Register from './pages/User/register.jsx';
import Login from './pages/User/login.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
