import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const EditRole = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [roleName, setRoleName] = useState('');
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [allPermissions, setAllPermissions] = useState([]);

  // Получение всех доступных permissions
  const fetchAllPermissions = useCallback(() => {
    axios.get("http://localhost:8085/api/role/permissions", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("AccessToken")
      }
    })
    .then(res => {
      setAllPermissions(res.data.data); // массив строк
    })
    .catch(() => {
      toast.error("Не удалось загрузить список разрешений");
    });
  }, []);

  // Получение текущей роли
  const fetchRole = useCallback(() => {
    axios.get(`http://localhost:8085/api/role/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("AccessToken")
      }
    })
    .then(res => {
      const { name, permissions } = res.data.data;
      setRoleName(name);
      setSelectedPermissions(permissions || []);
    })
    .catch(() => {
      toast.error("Не удалось загрузить данные роли");
    });
  }, [id]);

  // Загрузка данных при монтировании
  useEffect(() => {
    fetchAllPermissions();
    fetchRole();
  }, [fetchAllPermissions, fetchRole]);

  // Обработка выбора permission'ов
  const handlePermissionChange = (permission) => {
    if (selectedPermissions.includes(permission)) {
      setSelectedPermissions(prev => prev.filter(p => p !== permission));
    } else {
      setSelectedPermissions(prev => [...prev, permission]);
    }
  };

  // Отправка формы
  const handleSubmit = (e) => {
    e.preventDefault();

    const roleData = {
      name: roleName,
      permissions: selectedPermissions
    };

    axios.put(`http://localhost:8085/api/role/${id}`, roleData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem("AccessToken")
      }
    })

    .then(() => {
      toast.success("Роль успешно обновлена");
      navigate("/role");
    })
    .catch(() => {
      toast.error("Не удалось обновить роль");
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Редактировать роль</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Название роли</label>
          <input
            type="text"
            className="form-control"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Права доступа</label>
          <div className="d-flex flex-wrap">
            {allPermissions.map((permission, index) => (
              <div key={index} className="form-check me-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`perm-${index}`}
                  checked={selectedPermissions.includes(permission)}
                  onChange={() => handlePermissionChange(permission)}
                />
                <label className="form-check-label" htmlFor={`perm-${index}`}>
                  {permission}
                </label>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Сохранить</button>
      </form>
    </div>
  );
};

export default EditRole;
