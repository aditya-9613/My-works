import React, { useState } from "react";
import './emailchange.css';
import { useNavigate } from "react-router-dom";
const Emailchange = () => {
    const [oemail, setoemail] = useState('');
    const [nemail, setnemail] = useState('');
    const [cemail, setcemail] = useState('');
    const navigate = useNavigate();
    const changeemail = async () => {
        if (nemail === cemail) {
            let result = await fetch('http://localhost:4000/owner-login/action/change-email', {
                method: 'Put',
                body: JSON.stringify({ oemail, nemail }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            result = await result.json();
            if (result === true) {
                alert('Email Changed Successfully');
                navigate('/owner-login/action');
            } else {
                alert('Wrong Old Email');
            }
        } else {
            alert('New Email Not Match');
        }

    }
    return (
        <div>
            <div className="container">
                <h4 className="emailchange">Change Email</h4>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-3">
                        <form className="row g-3">
                            <div className="col-md-12">
                                <label for="inputemail" className="form-label">Old Email</label>
                                <input type="email" className="form-control" id="inputemail" onChange={(e) => setoemail(e.target.value)} value={oemail} />
                            </div>
                            <div className="col-md-12">
                                <label for="inputemail" className="form-label">New Email</label>
                                <input type="email" className="form-control" id="inputemail" onChange={(e) => setnemail(e.target.value)} value={nemail} />
                            </div>
                            <div className="col-md-12">
                                <label for="inputemail" className="form-label">Confirm Email</label>
                                <input type="email" className="form-control" id="inputemail" onChange={(e) => setcemail(e.target.value)} value={cemail} />
                            </div>
                            <div className="col-12 d-flex justify-content-center mb-3 mt-3">
                                <button type="button" className="btn btn-primary" onClick={changeemail}>Change Email</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Emailchange;