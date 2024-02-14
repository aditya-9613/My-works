import React from "react";
import './header.css'
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-between">
                <div className="col">
                      <Link to='/'><img src={require('./images/header/name.png')} alt="..."/></Link>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                        <img className="logodes" src={require('./images/header/Sharp logo.png')} alt="" />
                    </div>
                    <div className="col-md-2 d-flex justify-content-center">
                        <img src={require('./images/header/khadi logo.png')} alt="" />
                    </div>
                    <div className="col-md-2 d-flex justify-content-center">
                        <img  className="logodes" src={require('./images/header/ghandhi.png')} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;