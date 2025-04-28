import {Navigate, Outlet} from 'react-router-dom';
import {useUser} from "../context/userContext";
import Sidebar from "./Sidebar/Sidebar";

const PrivateRoute = () => {
    const {user, loading} = useUser();

    if (loading) return <div>Loading...</div>; // or your spinner

    return user ? <>
            <div className="flex min-h-screen">
                <Sidebar/>
                <main className="flex-1 p-6 ml-64 bg-gray-100" style={{ marginLeft: '250px' }}>
                    <Outlet/>
                </main>
            </div>
        </>
        :
        <Navigate to="/login"/>;
}

export default PrivateRoute;