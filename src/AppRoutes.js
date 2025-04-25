import {Route, Routes} from "react-router-dom";
import NotFound from "./pages/notFound";
import Login from "./pages/login";
import Cabinet from "./pages/cabinet";
import ForgotPassword from "./pages/forgot-password";
import SuccessLinkSent from "./pages/successLinkSent";
import ResetPassword from "./pages/reset-password";
import PrivateRoute from "./components/PrivateRoute";
import Course from "./pages/course";


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
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default AppRoutes;
