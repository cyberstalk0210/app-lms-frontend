import {useUser} from "../context/userContext";
import {useNavigate} from "react-router-dom";


const Cabinet = () => {
    const {user} = useUser();
    const navigate = useNavigate();

    return (
        <div>
            Welcome to cabinet page {user.name}
            <button onClick={()=>{
                navigate('/course')
            }}>Go course</button>
        </div>
    )
}
export default Cabinet;