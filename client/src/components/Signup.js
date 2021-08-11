import React, { useState } from "react";
import { NavLink ,useHistory} from "react-router-dom";
import signup from '../images/Signup.jpg';

const Signup = () => {
    const [user,setUser] = useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:""
    })
    const history = useHistory();
    const handleInputs =(e)=>{
        let {name,value} = e.target;
        setUser({...user, [name]:value})
    }

    const register = async(e)=>{
        e.preventDefault();
        console.log("click");
        const {name,email,phone,work,password,cpassword} = user;

        const res = await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,email,phone,work,password,cpassword
            })
        });

        const data = await res.json();

        if(data.status === 422 || !data){
            alert("Invalid Registration");
            console.log("Invalid Registration");
        } else {
            alert("Registration Successful");
            console.log("Registration Successful");
            history.push('/login')
        }
    }
    return (
        <>
            <section className="signup">
                <div className="container mt-5 ">
                    <div className='row'>
                        <div className="col-9   mx-auto  pb-5 sign-info">
                            <div className="row">
                                <div className="col-lg-5 mx-auto ">
                                <h1 className="mb-5">Sign up</h1>
                                    <form method="POST">
                                        <div className="form-group">
                                            <input type="text" className="form-control" 
                                               name="name" onChange={handleInputs} value={user.name} 
                                               autoComplete="off" placeholder="Enter Your Name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control"                                             name="email" onChange={handleInputs} value={user.email} 
                                              autoComplete="off" placeholder="Your Email"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" 
                                               name="phone" onChange={handleInputs} value={user.phone} 
                                              autoComplete="off" placeholder="Mobile Number"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" 
                                               name="work" onChange={handleInputs} value={user.work} 
                                              autoComplete="off" placeholder="Your Profession" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" 
                                               name="password" onChange={handleInputs} value={user.password} 
                                              autoComplete="off" placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" 
                                               name="cpassword" onChange={handleInputs} value={user.cpassword} 
                                              autoComplete="off" placeholder="Confirm Your Password" />
                                        </div>
                                        <button type="submit" onClick={register} className="btn btn-primary mt-2">Register</button>
                                    </form>
                                </div>
                                <div className="col-lg-5 d-flex flex-column justify-content-center align-items-center">
                                    <img src={signup} className="img-fluid" alt=""></img>
                                    <NavLink to="/login">I am already register</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup;