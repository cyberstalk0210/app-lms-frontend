import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './login';
// import Register from './register';
// import ResetPassword from './resetPassword';
import Sitebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar'; 

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Sitebar />} />
          <Route path="/navbar" element={<Navbar />} />
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path='reset-password' element={<ResetPassword />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
