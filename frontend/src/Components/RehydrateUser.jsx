import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setUser } from '../redux/slices/userSlice';

const Rehydrate = ({ children }) => {
    const dispatch = useDispatch();
    const location = useLocation(); // Get current path
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(localStorage.getItem('token'));

    // Paths where Rehydrate should NOT run
    const excludedPaths = ['/sign-in', '/sign-up'];

    useEffect(() => {
        if (excludedPaths.includes(location.pathname)) {
            setLoading(false);
            return; // Skip fetching user
        }

        const fetchUser = async () => {
            try {
                const fetchedUserResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/get-user`, {
                    method: "GET",
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                });

                const fetchedUserData = await fetchedUserResponse.json();

                if (fetchedUserData.user) {
                    localStorage.setItem('userId', fetchedUserData.user._id);
                    dispatch(setUser(fetchedUserData.user));
                }
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
        setLoading(false);
    }, [dispatch, token, location.pathname]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return children;
};

export default Rehydrate;
