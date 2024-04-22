import React from  'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import Register from './Auth/Register';
import Login from './Auth/login';
import Dashboard from './pages/Dashboard';
import { useAuth } from './contexts/AuthContext';
import Portal from './pages/portal';
import Disc from './pages/Disc';

const App = () => {
  const {isAuthenticated} = useAuth();
  return (
  <Router>
    <Routes>
      <Route path='/' element={ !isAuthenticated ?<Register/>: <Navigate to = '/dashboard'/> } />
      <Route path= '/login' element= {!isAuthenticated ? <Login /> :  <Navigate to='/dashboard'/>} />
      <Route  path="/dashboard" element={isAuthenticated?<Dashboard /> : <Login/>} />
      <Route path="/portal" element={isAuthenticated ? <Portal /> : <Navigate to="/login" />} />
      <Route path="/disc" element={isAuthenticated ? <Disc /> : <Navigate to="/login" />} />
    </Routes>
  </Router>
  );
};

export default App;
