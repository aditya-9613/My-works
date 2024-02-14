import React, { useState } from "react";
import './update.css';
import { useNavigate } from "react-router-dom";
const Update = () => {
    const [uniqueid, setuniqueid] = useState('');
    const navigate = useNavigate();
    const updatedata = async () => {
        let result = await fetch('http://localhost:4000/owner-login/action/update-content', {
            method: 'Post',
            body: JSON.stringify({ uniqueid }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result=await result.json();
        if(result.name){
            navigate(`/owner-login/action/update-content/${uniqueid}`);
        }else{
         alert("Data Not Found");
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 text-center">
                        <label htmlFor="inputPassword5" className="form-label mt-3 font-monospace fs-3">Unique Id</label>
                        <input type="text" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" onChange={(e) => setuniqueid(e.target.value)} value={uniqueid} />
                        <div className="d-grid gap-2 col-3 mx-auto mb-3 mt-3">
                            <button className="btn btn-primary" type="button" onClick={updatedata} >Update</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
export default Update;