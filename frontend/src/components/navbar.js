import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    const [search,setsearch]=useState('');
    const key=['Ayurvedic','Khadi Herbal'];
    const navigate=useNavigate();
    const find= async()=>{
        let result = await fetch('http://localhost:4000/search',{
            method:'Post',
            body:JSON.stringify({search}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result=await result.json();
        if(result.length===0){
            alert('No Data');
        }else{
           navigate(`/search/${search}`);
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbody">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={`/Medicenes/${key[0]}`}>Ayurvedic Medicenes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={`/Medicenes/${key[1]}`}>Khadi Herbal</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={`/Medicenes/${'Khadi Gramodyog'}`}>Khadi Gramodyog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contact-us">Contact Us</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setsearch(e.target.value)} value={search} />
                            <button className="btn btn-outline-primary" type="button" onClick={find}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );

}
export default Navbar;