import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './footer.css';
const Footer = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const Logout = () => {
        localStorage.clear();
        navigate('/owner-login');
    }
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row foot">
                        <div className="col-md-3 column">
                            <p><Link to="/order-details" className="text-white ">Orders</Link><br />
                                <Link to='/services' className="text-white "> Our Services</Link><br />
                                <Link to='/career' className="text-white "> Career</Link><br />
                            </p>
                        </div>
                        <div className="col-md-3 column">
                            <p>
                                <Link to='/history' className="text-white "> History</Link> <br />
                                <Link to='/board-members' className="text-white "> Board of Directors</Link> <br />
                                <Link to='/declaration' className="text-white "> Declaration</Link> <br />
                            </p>
                        </div>
                        <div className="col-md-3 column">
                            <p>                               
                                <Link to="/policy" className="text-white ">Our Policy</Link> <br />
                                <Link to='/testimonials' className="text-white ">Testimonial</Link><br />
                                {auth ? <Link onClick={Logout} to='/owner-login' className="text-white ">Logout</Link> : <Link to="/owner-login" className="text-white "> Owner Login</Link>}<br/>{auth? <Link to='/owner-login/action' className="text-white ">Home</Link>:<Link></Link>}<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy">COPYRIGHT 2023</div>
        </div>
    );
}
export default Footer;