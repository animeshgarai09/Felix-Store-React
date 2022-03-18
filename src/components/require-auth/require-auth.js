import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@providers/auth-provider'
const RequireAuth = () => {
    const { userState } = useAuth()
    const location = useLocation()
    return (
        userState._id
            ? <Outlet />
            : <Navigate to="/signin" state={{ from: location }} replace />

    )
}

export default RequireAuth