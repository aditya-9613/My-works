import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Updated = () => {
    const [name, setname] = useState('');
    const [rate, setrate] = useState('');
    const [storage, setstorage] = useState('');
    const [category, setcategory] = useState('');
    const [shelf_life, setshelf_life] = useState('');
    const [packing_type, setpacking_type] = useState('');
    const [unit_packing, setunit_packing] = useState('');
    const [size, setsize] = useState('');
    const [manufacturer, setmanufacturer] = useState('');
    const [description, setdescription] = useState('');
    const [image, setimage] = useState([]);
    const params = useParams();
    const navigate = useNavigate();
    const change = (e) => {
        let imag = [];
        const chosenFiles = Array.prototype.slice.call(e.target.files);
        imag.push(chosenFiles);
        setimage(imag);
    }
    useEffect(() => {
        detail();
    },[]);
    const detail = async () => {
        let details = await fetch(`http://localhost:4000/owner-login/action/update-content/${params.key}`);
        details = await details.json();
        setname(details.name);
        setrate(details.rate);
        setstorage(details.storage);
        setcategory(details.category);
        setshelf_life(details.shelf_life);
        setpacking_type(details.packing_type);
        setunit_packing(details.unit_packing);
        setsize(details.size);
        setmanufacturer(details.manufacturer);
        setdescription(details.description);
    }

    const update = async (e) => {
        const formdata = new FormData();
        formdata.append("name", name);
        formdata.append("rate", rate);
        formdata.append("storage", storage);
        formdata.append("category", category);
        formdata.append("shelf_life", shelf_life);
        formdata.append("packing_type", packing_type);
        formdata.append("unit_packing", unit_packing);
        formdata.append("size", size);
        formdata.append("manufacturer", manufacturer);
        formdata.append("description", description);
        if(image[0]){
            for (let i = 0; i < image[0].length; i++) {
                formdata.append('image', image[0][i]);
            }
        }
        axios
            .put(`http://localhost:4000/owner-login/action/update-content/${params.key}`, formdata)
            .then((res) => {
                if (res.data.result === 'Data updated') {
                    alert('Data Updated');
                    navigate('/owner-login/action');
                } else {
                    alert('Data Incompelete');
                }
            })
            .catch((err) => {
                console.log(err);
                alert('Data Incomplete');
            });

    }

    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 text-center">
                        <form className="row g-3" encType="multipart/form-data">
                            <div className="col-md-12">
                                <label for="inputname" className="form-label">Medicine name</label>
                                <input type="text" className="form-control" id="inputname" value={name}  onChange={(e) => {setname(e.target.value)}}/>
                            </div>
                            <div className="col-md-12">
                                <label for="inputrate" className="form-label">Rate</label>
                                <input type="number" className="form-control" id="inputrate" value={rate} onChange={(e) => setrate(e.target.value)} />
                            </div>
                            <div className="col-md-12">
                                <label for="inputstorage" className="form-label">Storage</label>
                                <input type="text" className="form-control" id="inputstorage" value={storage} onChange={(e) => setstorage(e.target.value)} />
                            </div>
                            <div className="col-md-12">
                                <label for="inputState" className="form-label">Category</label>
                                <select id="inputState" className="form-select" onChange={(e) => setcategory(e.target.value)}>
                                    <option selected>Select Category</option>
                                    <option>Ayurvedic</option>
                                    <option>Khadi Gramodyog</option>
                                    <option>Khadi Herbal</option>
                                </select>
                            </div>
                            <div className="col-md-12">
                                <label for="inputlife" className="form-label">Shelf Life</label>
                                <input type="text" className="form-control" id="inputlife" value={shelf_life} onChange={(e) => setshelf_life(e.target.value)} />
                            </div>
                            <div className="col-md-12">
                                <label for="inputpack" className="form-label">Packaging Type</label>
                                <input type="text" className="form-control" id="inputpack" value={packing_type} onChange={(e) => setpacking_type(e.target.value)} />
                            </div>
                            <div className="col-md-12">
                                <label for="inputpack" className="form-label">Unit Packaging</label>
                                <input type="text" className="form-control" id="inputpack" value={unit_packing} onChange={(e) => setunit_packing(e.target.value)} />
                            </div>
                            <div className="col-md-12">
                                <label for="inputsize" className="form-label">Size</label>
                                <input type="text" className="form-control" id="inputsize" value={size} onChange={(e) => setsize(e.target.value)} />
                            </div>
                            <div className="col-md-12">
                                <label for="inputmanufacture" className="form-label">Manufacturer</label>
                                <input type="text" className="form-control" id="inputmanufacture" value={manufacturer} onChange={(e) => setmanufacturer(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setdescription(e.target.value)} value={description} ></textarea>
                            </div>
                            <div className="col-md-12">
                                <label for="inputmanufacture" className="form-label">Image</label>
                                <input type="file" className="form-control" id="inputmanufacture" multiple onChange={change} />
                            </div>
                            <div className="col-12 d-flex justify-content-center mb-3 mt-3">
                                <button type="button" className="btn btn-primary" onClick={update} filename="images" >Update</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
}
export default Updated;