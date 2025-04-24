import {Navigate, Outlet} from 'react-router-dom';
import {useUser} from "../context/userContext";

const PrivateRoute = () => {
    const {user, loading} = useUser();

    if (loading) return <div>Loading...</div>; // or your spinner

    return user ? <Outlet/> : <Navigate to="/login"/>;
}

export default PrivateRoute;