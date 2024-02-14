import React, { useEffect, useState } from "react";
import './productdetails.css'
import { useParams } from "react-router-dom";
const Productdetails = () => {
    const [data, setdata] = useState([]);
    const [ind, setind] = useState(0);
    const params = useParams();
    const prev = (length) => {
        if (ind === 0) {
            setind(length - 1);
        } else {
            setind(ind - 1);
        }
    }
    const next = (length) => {
        if (ind === (length - 1)) {
            setind(0);
        } else {
            setind(ind + 1);
        }
    }
    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);
    const getData = async () => {
        let result = await fetch(`http://localhost:4000/Medicenes/${params.key}`);
        result = await result.json();
        setdata(result);
    }
    return (
        <div>
            <div className="container">
                <div class="row d-flex justify-content-between">
                    {
                        data.map((item) =>

                            <div class="col-md-4 medicinebox">
                                <h4 className="Product text-center">{item.name}</h4>
                                <div className="parent">
                                    <div className=" images d-flex justify-content-center">
                                        <div className="d-flex justify-content-center prevdesign">
                                            <svg onClick={(() => prev(item.image.length))} xmlns="http://www.w3.org/2000/svg" width="40" height="100" fill="currentColor" className="bi bi-caret-left " viewBox="0 0 16 16">
                                                <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                                            </svg>
                                        </div>
                                        <img src={require(`D:/projectss/Sharp Mern/backend/uploads/${item.image[ind]}`)} className="rounded img-fluid" alt="..." />
                                        <div className="d-flex justify-content-center prevdesign">
                                            <svg onClick={(() => next(item.image.length))} xmlns="http://www.w3.org/2000/svg" width="40" height="100" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                                                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-center"><label className="fw-bold" htmlFor="">Unique Id : </label>{item.uniqueid} </p>
                                <p className="text-center"><label className="fw-bold" htmlFor="">Rate : </label>₹{item.rate}/Quantity</p>
                                <p className="text-center"><label className="fw-bold" htmlFor="">Category : </label>{item.category}</p>
                                <p className="text-center"><label className="fw-bold" htmlFor="">Box Unit : </label>{item.unit_packing}</p>
                                <p className="text-center"><label className="fw-bold" htmlFor="">Manufacturer : </label>{item.manufacturer}</p>
                                <p className="text-center"><label className="fw-bold" htmlFor="">Storage : </label>{item.storage}</p>
                                <p className="text-center"><label className="fw-bold" htmlFor="">Size : </label>{item.size}</p>
                                <p className="text-center"><label className="fw-bold" htmlFor="">Shelf-Life : </label>{item.shelf_life}</p>
                                <p className="text-center"><label className="fw-bold" htmlFor="">Packaging-Type : </label>{item.packing_type}</p>
                                <p className="text-center"><label className="fw-bold" htmlFor="">Description : </label>{item.description}</p>
                            </div>
                        )
                    }
                </div>

            </div>
        </div >
    );
}
export default Productdetails;