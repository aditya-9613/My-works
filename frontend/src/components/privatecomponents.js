import React from "react";
import { Navigate,Outlet } from "react-router-dom";
const Privatecomponents=()=>{
    const auth = localStorage.getItem('user');
    return(
    auth ? <Outlet/>:<Navigate to='/owner-login'/>
    );
}
export default Privatecomponents;