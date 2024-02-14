import React, { useEffect, useState } from "react";
import './orderdetails.css';
import { useNavigate } from "react-router-dom";
const Orderdetails = () => {
    const [name, setname] = useState('');
    const [uniqueid, setuniqueid] = useState('');
    const [address, setaddress] = useState('');
    const [landmark, setlandmark] = useState('');
    const [quantity, setquantity] = useState('');
    const [mobile, setmobile] = useState('');
    const [gstno, setgstno] = useState('');
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');
    const [pincode, setpincode] = useState('');
    const [check, setcheck] = useState('');
    const [data, setdata] = useState([]);
    const status = 'Pending';
    const navigate = useNavigate();
    const ordid = () => {
        let order = 'OI' + Math.trunc((100000000 * (1 + Math.random()))) + 'SL';
        return (order);
    }
    useEffect(() => {
        getid();
    }, []);
    const getid = async () => {
        let result = await fetch('http://localhost:4000/order-details');
        result = await result.json();
        setdata(result);
    }
    const placeOrder = async () => {
        let orderid = ordid();
        let result = await fetch('http://localhost:4000/order-details', {
            method: 'Post',
            body: JSON.stringify({ name, uniqueid, address, landmark, quantity, mobile, gstno, city, state, pincode, status, orderid }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        if (result.result === 'Wrong Unique Id') {
            alert('No Products Found');
        } else if (result.result === 'Required Fields') {
            alert('Required Fields');
        } else {
            alert('Order placed');
            navigate(`/order-details/${orderid}`);
        }
    }
    return (
        <div>
            <div className="container">
                <h4 className="detailHeading">Order Details</h4>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <form className="row g-3">
                            <div className="col-md-12">
                                <label htmlFor="inputname" className="form-label">Name/Company Name</label>
                                <input type="text" className="form-control" id="inputname" onChange={(e) => setname(e.target.value)} value={name} />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputid" className="form-label">Unique Id</label>
                                <select class="form-select" aria-label="Default select example" onChange={(e)=>setuniqueid(e.target.value)} value={uniqueid}>
                                    <option selected>Select UniqueId</option>
                                    {
                                        data.map((item) =>
                                            <option>{item}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputquantity" className="form-label">Quantity</label>
                                <input type="number" className="form-control" id="inputquantity" onChange={(e) => setquantity(e.target.value)} value={quantity} />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputmobile" className="form-label">Mobile Number</label>
                                <input type="number" className="form-control" id="inputmobile" onChange={(e) => setmobile(e.target.value)} value={mobile} />
                            </div>
                            <div className="col-md-12">
                                <p>GST Number</p>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" onChange={(e) => setcheck(e.target.checked)} />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">Yes</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputgst" className="form-label">GST Number</label>
                                <input type="text" className="form-control" id="inputgst" onChange={(e) => setgstno(e.target.value)} value={gstno} placeholder="(Optional)" disabled={check ? "" : "disabled"} />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">Postal Address</label>
                                <input type="text" className="form-control" id="inputAddress" onChange={(e) => setaddress(e.target.value)} value={address} />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputlandmark" className="form-label">Landmark</label>
                                <input type="text" className="form-control" id="inputlandmark" onChange={(e) => setlandmark(e.target.value)} value={landmark} />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputCity" className="form-label">City</label>
                                <input type="text" className="form-control" id="inputCity" onChange={(e) => setcity(e.target.value)} value={city} />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputstate" className="form-label">State</label>
                                <input type="text" className="form-control" id="inputstate" onChange={(e) => setstate(e.target.value)} value={state} />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputZip" className="form-label">Pin code</label>
                                <input type="number" className="form-control" id="inputZip" onChange={(e) => setpincode(e.target.value)} value={pincode} />
                            </div>
                            <div className="col-12 d-flex justify-content-center mb-3">
                                <button type="button" className="btn btn-primary" onClick={placeOrder}>Place Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Orderdetails;