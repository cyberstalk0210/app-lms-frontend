import React, {createContext, useContext, useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";


const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({children}) => {
    console.log('Fetching user...');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // while fetching user
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;

        const fetchUser = async () => {
            try {
                const res = await axios.get(
                    'http://localhost:8085/api/user/me',
                    {headers: {Authorization: 'Bearer ' + localStorage.getItem("AccessToken")}}
                );
                if (isMounted) setUser(res.data.data);
            } catch (err) {
                if (isMounted) {
                    setError(err);
                    setUser(null);
                    navigate("/login");
                }
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchUser();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <UserContext.Provider value={{user, setUser, loading, error}}>
            {children}
        </UserContext.Provider>
    );
};
