import React, { useEffect, useState } from "react";
import './checkorder.css'
import { useNavigate } from "react-router-dom";
const Checkorder = () => {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('http://localhost:4000/owner-login/action/check-orders').then((result) => {
      result.json().then((res) => {
        setdata(res);
      });
    });
  },[]);
  const cancel = async (orderid) => {
    let action = 'Cancel';
    let result = await fetch(`http://localhost:4000/owner-login/action/check-orders/${orderid}`, {
      method: 'Put',
      body: JSON.stringify({ action }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    if (result.result === 'order cancelled') {
      alert('order cancelled');
      navigate('/owner-login/action/check-orders');
    } else {
      alert('Wrong Action');
    }
  }
  const compelete = async (orderid) => {
    let action = 'Completed'
    let result = await fetch(`http://localhost:4000/owner-login/action/check-orders/${orderid}`, {
      method: 'Put',
      body: JSON.stringify({ action }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    if (result.result === 'order Completed') {
      alert('order Completed');
      navigate('/owner-login/action/check-orders');
    } else {
      alert('Wrong Action');
    }
  }
  return (
    <div>
      <h3 className="text-center">PENDING ORDERS LIST</h3>
      {
        data.map((item) =>
          <div className="container">
            <div className="row mainbox pb-2 pt-2 mt-2 mb-2 shadow p-3 mb-5 bg-body-tertiary rounded">
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
                <div className="d-md-flex justify-content-between">
                  <button className="btn btn-primary" type="button" onClick={(() => cancel(item.orderid))}>Cancel Order</button>
                  <button className="btn btn-primary" type="button" onClick={(() => compelete(item.orderid))}>Order Compeleted</button>
                </div>
              </div>
            </div>
          </div>

        )

      }
    </div>
  );
}
export default Checkorder;