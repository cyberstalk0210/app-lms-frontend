import {BrowserRouter} from 'react-router-dom';
import {UserProvider} from './context/userContext';
import AppRoutes from './AppRoutes';

const App = () => {
    return (
        <BrowserRouter>
            <UserProvider>
                <AppRoutes/>
            </UserProvider>
        </BrowserRouter>
    );
}

export default App;
