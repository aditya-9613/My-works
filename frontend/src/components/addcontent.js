import React, { useState } from "react";
import './addcontent.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Addcontent = () => {
    const [name, setname] = useState('');
    const [uniqueid, setuniqueid] = useState('');
    const [rate, setrate] = useState('');
    const [storage, setstorage] = useState('');
    const [category, setcategory] = useState('Select Category ');
    const [shelf_life, setshelf_life] = useState('');
    const [packing_type, setpacking_type] = useState('');
    const [unit_packing,setunit_packing]=useState('');
    const [size, setsize] = useState('');
    const [manufacturer, setmanufacturer] = useState('');
    const [description, setdescription] = useState('');
    const [image, setimage] = useState([]);
    const navigate = useNavigate();
    const change = (e) => {
        let imag = [];
        const chosenFiles = Array.prototype.slice.call(e.target.files);
        imag.push(chosenFiles);
        setimage(imag);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("name",name);
        formdata.append("uniqueid",uniqueid);
        formdata.append("rate",rate);
        formdata.append("storage",storage);
        formdata.append("category",category);
        formdata.append("shelf_life",shelf_life);
        formdata.append("packing_type",packing_type);
        formdata.append("unit_packing",unit_packing);
        formdata.append("size",size);
        formdata.append("manufacturer",manufacturer);
        formdata.append("description",description);
        for (let i = 0; i < image[0].length; i++) {
            formdata.append('image', image[0][i]);
        }
        axios.post('http://localhost:4000/owner-login/action/add-content',formdata)
        .then(res=>{
            if(res.data==='Unique Id Exists'){
                alert('Unique Id Exists');
            }else{
                alert('Data Saved');
                navigate('/owner-login/action');
            }
        })
        .catch(err=>{
           alert('Required Feild');
        })
    }
    return (
        <div>
            <div className="container">
                <h4 className="addcontent">Enter New Data</h4>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-3">
                        <form className="row g-3" encType="multipart/form-data">
                            <div className="col-md-12">
                                <label for="inputname" className="form-label">Medicine name</label>
                                <input type="text" className="form-control" id="inputname" onChange={(e) => setname(e.target.value)} value={name} />
                            </div>
                            <div className="col-md-12">
                                <label for="inputmanufacture" className="form-label">Unique Id</label>
                                <input type="text" className="form-control" id="inputmanufacture" onChange={(e) => setuniqueid(e.target.value)} value={uniqueid} />
                            </div>
                            <div className="col-md-12">
                                <label for="inputrate" className="form-label">Rate</label>
                                <input type="number" className="form-control" id="inputrate" onChange={(e) => setrate(e.target.value)} value={rate} />
                            </div>
                            <div className="col-md-12">
                                <label for="inputstorage" className="form-label">Storage</label>
                                <input type="text" className="form-control" id="inputstorage" onChange={(e) => setstorage(e.target.value)} value={storage} />
                            </div>
                            <div className="col-md-12">
                                <label for="inputState" className="form-label">Category</label>
                                <select id="inputState" className="form-select" onChange={(e) => setcategory(e.target.value)} value={category}>
                                    <option selected>Select Category</option>
                                    <option>Ayurvedic</option>
                                    <option>Khadi Gramodyog</option>
                                    <option>Khadi Herbal</option>
                                </select>
                            </div>
                            <div className="col-md-12">
                                <label for="inputlife" className="form-label">Shelf Life</label>
                                <input type="text" className="form-control" id="inputlife" onChange={(e) => setshelf_life(e.target.value)} value={shelf_life} />
                            </div>
                            <div className="col-md-12">
                                <label for="inputpack" className="form-label">Packaging Type</label>
                                <input type="text" className="form-control" id="inputpack" onChange={(e) => setpacking_type(e.target.value)} value={packing_type} />
                            </div>
                            <div className="col-md-12">
                                <label for="inputpack" className="form-label">Unit Packing</label>
                                <input type="text" className="form-control" id="inputpack" onChange={(e) => setunit_packing(e.target.value)} value={unit_packing} />
                            </div>
                            <div className="col-md-12">
                                <label for="inputsize" className="form-label">Size</label>
                                <input type="text" className="form-control" id="inputsize" onChange={(e) => setsize(e.target.value)} value={size} />
                            </div>
                            <div className="col-md-12">
                                <label for="inputmanufacture" className="form-label">Manufacturer</label>
                                <input type="text" className="form-control" id="inputmanufacture" onChange={(e) => setmanufacturer(e.target.value)} value={manufacturer} />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setdescription(e.target.value)}></textarea>
                            </div>
                            <div className="col-md-12">
                                <label for="inputmanufacture" className="form-label">Image</label>
                                <input type="file" className="form-control" id="inputmanufacture" multiple onChange={change} />
                            </div>
                            <div className="col-12 d-flex justify-content-center mb-3 mt-3">
                                <button type="button" className="btn btn-primary" onClick={handleSubmit} filename="image" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Addcontent;