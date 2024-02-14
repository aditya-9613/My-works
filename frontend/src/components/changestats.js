import React, { useEffect, useState } from "react";
import './changestats.css'
import { useNavigate } from "react-router-dom";
const Changestats = () => {
  const [data, setdata] = useState([]);
  const [orderid,setorderid]=useState('');
  const navigate= useNavigate();
  const change=async()=>{
    let user = await fetch('http://localhost:4000/owner-login/action/change-status',{
      method:'Put',
      body:JSON.stringify({orderid}),
      headers:{
        'Content-Type':'application/json'
      }
    });
    user=await user.json();
    if(user.result==='Status Changed'){
      alert('Status Changed');
      navigate('/owner-login/action/change-status');
    }else{
      alert('Error');
    }
  }
  useEffect(() => {
    fetch('http://localhost:4000/owner-login/action/change-status').then((result) => {
      result.json().then((res) => {
        setdata(res);
      });
    });
  },[]);
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center mb-5">
          <div className="col-md-4 text-center">
            <label htmlFor="inputPassword5" className="form-label mt-3 font-monospace fs-3">Order Id</label>
            <input type="text" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" onChange={(e) => setorderid(e.target.value)} value={orderid} />
            <div className="d-grid gap-2 col-3 mx-auto mb-3 mt-3">
              <button className="btn btn-primary" type="button" onClick={change}>Change</button>
            </div>
          </div>

        </div>

      </div>
      <h3 className="text-center">CANCELLED ORDERS LIST</h3>
      {
        data.map((item) =>
          <div className="container">
            <div className="row cancelbox pb-2 pt-2 mt-2 mb-2 shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="col">
                <div className="orderbox">
                  <p className="text-center"><label className="fw-bold" htmlFor="">Name/Company Name :{item.name} </label></p>
                  <p className="text-center"><label className="fw-bold" htmlFor="">Product Unique Id :{item.uniqueid} </label></p>
                  <p className="text-center">This Product is to be Delivered at {item.address} , {item.landmark} is the landmark . And the total number of
                    Quantity is{item.quantity} </p>
                  <p className="text-center"><label className="fw-bold" htmlFor="">Pincode :{item.pincode} </label></p>
                  <p className="text-center"><label className="fw-bold" htmlFor="">Order-Id :{item.orderid} </label></p>
                  <p className="text-center"><label className="fw-bold" htmlFor="">Order-Status :{item.status} </label></p>
                </div>
              </div>
            </div>
          </div>

        )
      }

    </div>
  );
}
export default Changestats;