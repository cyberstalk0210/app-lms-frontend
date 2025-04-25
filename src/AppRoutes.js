import {Route, Routes} from "react-router-dom";
import NotFound from "./pages/notFound";
import Login from "./pages/login";
import Cabinet from "./pages/cabinet";
import ForgotPassword from "./pages/forgot-password";
import SuccessLinkSent from "./pages/successLinkSent";
import ResetPassword from "./pages/reset-password";
import PrivateRoute from "./components/PrivateRoute";
import Course from "./pages/course";
import RoleList from "./pages/role/roleList";
import AddRole from "./pages/role/addRole";
import EditRole from "./pages/role/editRole";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Admission from "./pages/admission";


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/forgot-password" element={<ForgotPassword/>}/>
            <Route path="/success-link-sent" element={<SuccessLinkSent/>}/>
            <Route path="/reset-password" element={<ResetPassword/>}/>
            <Route element={<PrivateRoute/>}>
                <Route path="/cabinet" element={<Cabinet/>}/>
                <Route path="/course" element={<Course/>}/>
                <Route path="/admission" element={<Admission/>}/>
                <Route path="/role" element={<RoleList/>}/>
                <Route path="/role/add" element={<AddRole/>}/>
                <Route path="/role/edit/:id" element={<EditRole/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default AppRoutes;
