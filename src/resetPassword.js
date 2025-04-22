import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!password || !confirmPassword) {
      setError('Iltimos, barcha maydonlarni to‘ldiring.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Parollar mos emas.');
      return;
    }

    // Bu yerda backendga so‘rov yuborish mumkin
    setSuccess('Parol muvaffaqiyatli o‘zgartirildi!');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm rounded-4">
            <h3 className="text-center mb-4">Parolni Tiklash</h3>

            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Yangi Parol</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Yangi parol kiriting"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Parolni Tasdiqlang</label>
                <input
                  type="password"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Parolni takrorlang"
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Parolni O‘zgartirish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;