import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@providers/auth-provider'
const RestrictAuth = () => {
    const { userState } = useAuth()
    const location = useLocation()
    return (
        userState._id
            ? <Navigate to="/" state={{ from: location }} replace />
            : <Outlet />

    )
}

export default RestrictAuth