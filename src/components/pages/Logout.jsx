import React from 'react'
import { useLocation } from 'react-router-dom'

const Logout = () => {
    const getDataFromDashBoard = useLocation()
  return (
    <>
        <div>Logout</div>
        <div>{getDataFromDashBoard.state.status}</div>
    </>
    )
}

export default Logout