import React, { useState } from "react";
import './useridchange.css';
import { useNavigate } from "react-router-dom";
const Useridchange = () => {
    const [oldid, setoldid] = useState('');
    const [newid, setnewid] = useState('');
    const navigate = useNavigate();
    const changeId = async () => {
        let result = await fetch('http://localhost:4000/owner-login/action/change-userid', {
            method: 'Put',
            body: JSON.stringify({ oldid, newid }),
            headers: {
                'Content-Type': 'application/json'
            }

        });
        result = await result.json();
        if(result===true){
            alert('UserId Changed Successfully');
            navigate('/owner-login/action');
        }else{
            alert('Wrong UserId');
        }
    }
    return (
        <div>
            <div className="container">
                <h4 className="userchange">Change User Id</h4>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-3">
                        <form className="row g-3">
                            <div className="col-md-12">
                                <label for="inputid" className="form-label">Old UserId</label>
                                <input type="text" className="form-control" id="inputid" onChange={(e) => setoldid(e.target.value)} value={oldid} />
                            </div>
                            <div className="col-md-12">
                                <label for="inputid" className="form-label">New UserId</label>
                                <input type="text" className="form-control" id="inputid" onChange={(e) => setnewid(e.target.value)} value={newid} />
                            </div>
                            <div className="col-12 d-flex justify-content-center mb-3 mt-3">
                                <button type="button" className="btn btn-primary" onClick={changeId}>Change UserId</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Useridchange;