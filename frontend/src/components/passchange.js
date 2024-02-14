import React, { useState } from "react";
import './passchange.css';
import { useNavigate } from "react-router-dom";
const Passchange = () => {
    const [oldpassword, setoldpassword] = useState('');
    const [newpass, setnewpass] = useState('');
    const [confirmpass, setconfirmpass] = useState('');
    const [check, setcheck] = useState('');
    const navigate = useNavigate();
    const changePass = async () => {
        if(newpass===confirmpass){
            let result = await fetch('http://localhost:4000/owner-login/action/change-passwords', {
                method: 'Put',
                body: JSON.stringify({ oldpassword, newpass }),
                headers: {
                    'Content-Type': 'application/json'
                }
    
            });
            result = await result.json();
            if(result===true){
                alert('Password Changed Successfully');
                navigate('/owner-login/action');
            }else{
                alert('Wrong Old Password');
            }
        }else{
            alert('New Password Didnt Match');
        }
        
    }
    return (
        <div>
            <div className="container">
                <h4 className="passchange">Change Password</h4>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-3">
                        <form className="row g-3">
                            <div className="col-md-12">
                                <label for="inputpassword" className="form-label">Old Password</label>
                                <input type={check ? 'text' : 'password'} className="form-control" id="inputpassword" onChange={(e) => setoldpassword(e.target.value)} value={oldpassword} />
                            </div>
                            <div className="col-md-12">
                                <label for="inputpassword" className="form-label">New Password</label>
                                <input type={check ? 'text' : 'password'} className="form-control" id="inputpassword" onChange={(e) => setnewpass(e.target.value)} value={newpass} />
                            </div>
                            <div className="col-12">
                                <label for="inputpassword" className="form-label">Confirm Password</label>
                                <input type={check ? 'text' : 'password'} className="form-control" id="inputpassword" onChange={(e) => setconfirmpass(e.target.value)} value={confirmpass} />
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" onChange={(e) => setcheck(e.target.checked)} />
                                <label className="form-check-label" for="inlineCheckbox1">Show Password</label>
                            </div>
                            <div className="col-12 d-flex justify-content-center mb-3 mt-3">
                                <button type="button" className="btn btn-primary" onClick={changePass}>Change Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Passchange;