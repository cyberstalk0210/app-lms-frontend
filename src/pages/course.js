import {useUser} from "../context/userContext";

const Course = () => {
    const {user} = useUser();
    return (
        <div>
            Welcome to course page {user.name}
        </div>
    )
}
export default Course;