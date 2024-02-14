import React, { useEffect, useState } from "react";
import './searched.css';
import { useParams } from "react-router-dom";
const Searched = () => {
    const [data, setdata] = useState([]);
    const params = useParams();
    useEffect(() => {
        fetch(`http://localhost:4000/search/${params.key}`).then((result) => {
            result.json().then((res) => {
                setdata(res);
            });
        });
    });
    return (
        <div className="boxxx">
            {
                data.map((item) =>
                    <div class="container">
                        <div class="row d-flex justify-content-center">
                            <div class="col-md-6 content">
                                <h4 class="headingname">{item.name}</h4>
                                <div class="image">
                                    <img src="info1.jpg" alt="..." />
                                </div>
                                <p class="text-center"><label class="fw-bold" for="">Unique Id :</label>{item.unquieid}</p>
                                <p class="text-center"><label class="fw-bold" for="">Name :</label>{item.rate}</p>
                                <p class="text-center"><label class="fw-bold" for="">Rate :</label>{item.manufacturer}</p>
                                <p class="text-center"><label class="fw-bold" for="">Description :</label>{item.description}</p>

                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
}
export default Searched;