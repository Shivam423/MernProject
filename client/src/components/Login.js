import React, { useContext, useState } from "react";
import {useHistory} from "react-router-dom"
import login from "../images/loginpic.png";
import {UserContext} from "../App";

const Login = ()=>{
    const {state,dispatch} = useContext(UserContext); 
    const [email,setEmail] = useState('');
    const [password,setpassword] = useState('');
    const history = useHistory();

    const loginuser= async(e)=>{
        e.preventDefault();
        const res = await fetch('/signin',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        })
        const data = await res.json();
        if(data === 400 | !data){
            alert("Invalid Credentials");
        }else{
            dispatch({type:"USER", payload:true})
            alert("Login Successful")
            history.push("/");
        }
    }
    return(
        <>
        <section className="login d-flex justify-content-center align-items-center">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-9 mx-auto pb-5 pt-5 pl-5 pr-5  sign-in">
                        <div className="row">
                            <div className="col-lg-5 d-flex justify-content-center align-items-center">
                                <img src={login} className="img-fluid" alt=""/>
                            </div>
                            <div className="col-lg-6 mx-auto">
                            <h1 className="mb-5">Login</h1>
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="exampleInputPassword1"
                                               onChange={(e)=>{setEmail(e.target.value)}} 
                                              value={email} placeholder="Your Email"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" id="exampleInputEmail1"
                                               onChange={(e)=>{setpassword(e.target.value)}} 
                                              value={password} placeholder="Your Password"
                                            />
                                        </div>
                                        <button type="submit" onClick={loginuser} className="btn btn-primary mt-2">Login</button>
                                    </form>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Login;