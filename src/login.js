import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', formData);
      setMessage(response.data); // ✅ serverdan qaytgan text
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data); // ❌ noto‘g‘ri login
      } else {
        setMessage("Server bilan bog‘lanib bo‘lmadi.");
      }
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <h2 className="mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            name="username" // <-- tuzatildi
            className="form-control"
            onChange={handleChange}
            value={formData.username}
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleChange}
            value={formData.password}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>

      {message && <div className="mt-3 alert alert-info">{message}</div>}

      <p className="mt-3 text-center">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
