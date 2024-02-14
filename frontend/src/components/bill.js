import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useReactToPrint } from 'react-to-print';
import './bill.css'
const Bill = () => {
    const [data, setdata] = useState([]);
    let total = 0;
    let delivery = 100;
    const params = useParams();
    const componentPDF = useRef();
    useEffect(() => {
        fetch(`http://localhost:4000/order-details/${params.key}`).then((result) => {
            result.json().then((res) => {
                setdata(res);
            });
        });
    });
    total=(data[8]*data[2]);
    const genratePDF = useReactToPrint({
        content: () => componentPDF.current,
        documentTitle: "Bill",
        onAfterPrint: () => alert('Bill downloaded')
    })
    return (
        <div>
            <div className="container">
                <h3 className="text-center">Final Bill </h3>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                        <div ref={componentPDF} style={{ width: '100%' }}>
                            <div className="orderbox">
                                <p><label className="fw-bold text-start" htmlFor="">Name/Company Name :  </label> {data[0]}</p><hr />
                                <p><label className="fw-bold text-start" htmlFor="">Product Unique Id : </label> {data[1]} </p><hr />
                                <p><label className="fw-bold text-start" htmlFor="">Product Name : </label> {data[7]}</p><hr />
                                <p><label className="fw-bold text-start" htmlFor="">Quantity : </label> {data[2]} </p><hr />
                                <p><label className="fw-bold text-start" htmlFor="">Order Id : </label> {data[3]} </p><hr />
                                <p><label className="fw-bold text-start" htmlFor="">Price : ₹ </label>  {data[8]} </p><hr />
                                <p><label className="fw-bold text-start" htmlFor="">Total Cost : ₹ </label>{total}</p><hr />
                                <p><label className="fw-bold text-start" htmlFor="">Delivery Cost :₹ </label>{delivery}</p><hr />
                                <p><label className="fw-bold text-start" htmlFor="">Payable Amount :₹ </label>{total + delivery}</p><hr />
                                <p><label className="fw-bold text-start" htmlFor="">GSTIN Number : </label> {data[4]} </p><hr />
                                <p><label className="fw-bold text-start" htmlFor="">Payment Details : </label>UPI Link : 9794160949@ybl <br /> Bank:Union Bank Of India <br /> Account No : 424402010726619<br /> Account Holder Name : Sarva Aditya <br /> IFSC CODE : UBIN0542209 <br/><img className="imgstyle" src={require('./images/QRCode.jpeg')} alt="..."></img></p><hr />
                                <p><label className="fw-bold text-start" htmlFor="">Mobile Number : </label> {data[5]}</p><hr />
                                <p><label className="fw-bold" htmlFor="">Address : </label> {data[6]} , {data[9]} , {data[10]} <br/> Pincode: {data[11]} </p>
                                <p><label className="fw-bold text-start" htmlFor="">Landmark : </label> {data[12]} </p><hr />
                            </div>
                        </div>
                        <div class="d-grid gap-2 col-2 mx-auto">
                            <button className="btn btn-primary" type="button" onClick={genratePDF}>Download</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Bill;