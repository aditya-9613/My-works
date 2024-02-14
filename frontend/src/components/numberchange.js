import React, { useState } from "react";
import './numberchange.css';
import { useNavigate } from "react-router-dom";
const Numberchange = () => {
    const [uid, setuid] = useState('');
    const [email, setemail] = useState('');
    const [oldnum, setoldnum] = useState('');
    const [newnum, setnewnum] = useState('');
    const navigate = useNavigate();
    const changeNum = async () => {
        let result = await fetch('http://localhost:4000/owner-login/action/change-number', {
            method: 'Put',
            body: JSON.stringify({ uid, email, oldnum, newnum }),
            headers: {
                'Content-Type': 'application/json'
            }

        });
        result = await result.json();
        if (result === true) {
            alert('Mobile Number Changed Successfully');
            navigate('/owner-login/action');
        } else {
            alert('Wrong Credentials');
        }
    }
    return (
        <div>
            <div className="container">
                <h4 className="numbchange">Change Mobile Number</h4>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-3">
                        <form className="row g-3">
                            <div className="col-md-12">
                                <label for="inputid" className="form-label">UserId</label>
                                <input type="text" className="form-control" id="inputid" onChange={(e) => setuid(e.target.value)} value={uid} />
                            </div>
                            <div className="col-md-12">
                                <label for="inputemail" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputemail" onChange={(e) => setemail(e.target.value)} value={email} />
                            </div>
                            <div className="col-md-12">
                                <label for="inputnumber" className="form-label">Old Mobile Number</label>
                                <input type="number" className="form-control" id="inputnumber" onChange={(e) => setoldnum(e.target.value)} value={oldnum} />
                            </div>
                            <div className="col-md-12">
                                <label for="inputnumber" className="form-label"> New Mobile Number</label>
                                <input type="number" className="form-control" id="inputnumber" onChange={(e) => setnewnum(e.target.value)} value={newnum} />
                            </div>
                            <div className="col-12 d-flex justify-content-center mb-3 mt-3">
                                <button type="button" className="btn btn-primary" onClick={changeNum}>Change Number</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Numberchange;