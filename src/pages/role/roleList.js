import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import 'bootstrap/dist/css/bootstrap.min.css';
import DialogModal from "../../components/DialogModal/DialogModal";
import {Button} from "reactstrap";

const RoleList = () => {
    const [roles, setRoles] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [usersUsingRole, setUsersUsingRole] = useState([]);
    const [roleToDelete, setRoleToDelete] = useState(null);
    const [replacementRoleId, setReplacementRoleId] = useState(null);
    const navigate = useNavigate();
    const [deleteModalOpen = false, setDeleteModalOpen] = useState();
    const [item = {}, setItem] = useState();

    useEffect(() => {
        fetchRoles();
    }, []);

    useEffect(() => {
        console.log("🔍 showModal изменилось:", showModal);
    }, [showModal]);

    const fetchRoles = async () => {
        axios.get("http://localhost:8085/api/role", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("AccessToken")
            }
        }).then(res => {
            setRoles(res.data.data);
        }).catch(err => {
            console.log(err);
            toast.error(err.response.data.errors[0].msg);
        });
    };

    const handleDelete = (role) => {
        setItem(role)
        setDeleteModalOpen(true)
    };

    const deleteRole = () => {
        console.log(item)
        axios.delete(`http://localhost:8085/api/role/update-users-role?oldRoleId=${item.id}`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("AccessToken")
            }
        }).then(() => {
            toast.success("Удалено успешно");
            fetchRoles();
        }).catch(err => {
            toast.error(err.response.data.errors[0].msg);
        });
    };

    const handleConfirmReplaceAndDelete = () => {
        if (!replacementRoleId) {
            toast.error("Выберите новую роль");
            return;
        }

        axios.delete(`http://localhost:8085/api/role/update-users-role/${roleToDelete}/${replacementRoleId}`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("AccessToken")
            }
        }).then(() => {
            deleteRole(roleToDelete);
            setShowModal(false);
        }).catch(() => {
            toast.error("Ошибка при обновлении ролей у пользователей");
        });
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Role List</h2>
            <div className="text-end mb-3">
                <button className="btn btn-success" onClick={() => navigate("/role/add")}>+Add</button>
            </div>
            <table border="1" cellPadding="10" style={{width: '100%', borderCollapse: 'collapse'}}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Role Name</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {roles.map(role => (
                    <tr key={role.id}>
                        <td>{role.id}</td>
                        <td>{role.name}</td>
                        <td>
                            <Button onClick={() => navigate(`/role/edit/${role.id}`)}>Edit</Button>
                            <Button onClick={() => handleDelete(role)} style={{marginLeft: '10px', color: 'red'}}>
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <DialogModal ochil={deleteModalOpen}
                         yopilFunc={() => setDeleteModalOpen(false)}
                         submitModal={deleteRole}
            />
        </div>
    );
};

export default RoleList;
