import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateCom = () => {
    const auth = localStorage.getItem("user");

    if (auth) {
        return <Outlet />;
    } else {
        return <Navigate to="/SignUp" />;
    }
}

export default PrivateCom;
