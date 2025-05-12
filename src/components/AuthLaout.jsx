import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

export default function Protected({ children, authentication = true }) {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const auth = useSelector(state => state.auth);
    const authStatus = auth?.status;
    const isAdmin = auth?.userData?.labels[0] === 'admin';

    useEffect(() => {
        if (!authStatus || !isAdmin) {
            navigate('/login');
        }
        setLoading(false);
    }, [authStatus, isAdmin, navigate]);

    return loading ? <h1>Loading...</h1> : <>{children}</>;
}

