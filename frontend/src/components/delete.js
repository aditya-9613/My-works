import React, { useState } from "react";
import './delete.css';
const Delete = () => {
    const [uniqueid,setuniqueid]=useState('');
    const contentDelete= async()=>{
       let result= await fetch('http://localhost:4000/owner-login/action/delete-content',{
            method:"DELETE",
            body:JSON.stringify({uniqueid}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result=await result.json();
        if(result.acknowledged){
            alert('Content Deleted');
        }else{
            alert('Content Not Found');
        } 
    }
    return (
        <div>
            <div class="container">
                <h4 class="delcontent">Delete Content</h4>
                <div class="row d-flex justify-content-center">
                    <div class="col-md-3">
                        <form class="row g-3">

                            <div class="col-md-12">
                                <label for="inputid" class="form-label">Unique Id</label>
                                <input type="text" class="form-control" id="inputid" onChange={(e)=>setuniqueid(e.target.value)} value={uniqueid}/>
                            </div>
                            <div class="col-12 d-flex justify-content-center mb-3 mt-3">
                                <button type="button" class="btn btn-primary" onClick={contentDelete}>Delete Content</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Delete;