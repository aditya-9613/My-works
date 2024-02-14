import React from "react";
import { useNavigate } from "react-router-dom";
import './login.css';
const Login = () => {
    const [userid, setuserid] = React.useState('');
    const [password, setpassword] = React.useState('');
    const [checked, setchecked] = React.useState('');
    const navigate = useNavigate();
    const handleSubmit = async () => {
        if ((userid === '' && password === '')||(userid === '' || password === '')) {
         alert('Enter Credentials')
        } else {
            let result = await fetch('http://localhost:4000/owner-login', {
                method: 'post',
                body: JSON.stringify({ userid, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            result = await result.json();
            if (result.check) {
                localStorage.setItem("user", JSON.stringify(result));
                navigate('/owner-login/action');
            } else {
                alert('Wrong Credentials');
            }
        }
    }
    return (
        <div>
            <div className="container box">
                <h3 className="heading">Owner Login</h3>
                <div className="row login_form">
                    <div className="col-md-4">
                        <form>
                            <div className="mb-3 input_fields">
                                <label for="exampleInputEmail1" className="form-label">User Id</label>
                                <input type="text" className="form-control login_password" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" onChange={(e) => setuserid(e.target.value)} value={userid} />
                            </div>
                            <div className="mb-3 input_fields">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type={checked ? "text" : "password"} className="form-control login_password" id="exampleInputPassword1" onChange={(e) => setpassword(e.target.value)} value={password} />
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" onChange={(e) => setchecked(e.target.checked)} />
                                <label class="form-check-label" for="inlineCheckbox1">Show Password</label>
                            </div>
                            <div className="submit_button">
                                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;