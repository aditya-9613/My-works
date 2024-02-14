import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './action.css'
const Action = () => {
    const [data,setdata]=useState([]);
    useEffect(()=>{
       getDetails();
    },[]);
      const getDetails=async()=>{
         let result= await fetch('http://localhost:4000/owner-login/action');
         result=await result.json();
         setdata(result);
      }
    return (
        <div>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link active dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Menu
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/owner-login/action/change-passwords">Change Password</Link></li>
                                        <li><Link className="dropdown-item" to="/owner-login/action/change-userid">Change userId</Link></li>
                                        <li><Link className="dropdown-item" to="/owner-login/action/change-number">Change Registered Number</Link></li>
                                        <li><Link className="dropdown-item" to="/owner-login/action/change-email">Change Email</Link></li>
                                        <li><Link className="dropdown-item" to="/owner-login/action/check-orders">Pending Orders</Link></li>
                                        <li><Link className="dropdown-item" to="/owner-login/action/change-status">Change Order Status</Link></li>
                                        <li><Link className="dropdown-item" to="/owner-login/action/update-content">Update Content</Link></li>
                                        <li><Link className="dropdown-item" to="/owner-login/action/add-content">Add Content</Link></li>
                                        <li><Link className="dropdown-item" to="/owner-login/action/delete-content">Delete Content</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <h3 className="text-center">COMPELETED ORDERS LISTS</h3>
                {
                    data.map((item) =>
                        <div className="container">
                            <div className="row actionbox pb-2 pt-2 mt-2 mb-2 shadow p-3 mb-5 bg-body-tertiary rounded">
                                <div className="col">
                                    <div className="orderbox">
                                        <p className="text-center"><label className="fw-bold" htmlFor="">Name/Company Name : {item.name} </label></p>
                                        <p className="text-center"><label className="fw-bold" htmlFor="">Product Unique Id : {item.uniqueid} </label></p>
                                        <p className="text-center">This Product is to be Delivered at {item.address} , {item.landmark} is the landmark . And the total number of
                                            Quantity is{item.quantity} </p>
                                        <p className="text-center"><label className="fw-bold" htmlFor="">Pincode : {item.pincode} </label></p>
                                        <p className="text-center"><label className="fw-bold" htmlFor="">Order-Id : {item.orderid} </label></p>
                                        <p className="text-center"><label className="fw-bold" htmlFor="">Order-Status : {item.status} </label></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
}
export default Action;