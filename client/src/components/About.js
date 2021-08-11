import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
import profilepic from "../images/Signup.jpg";

const About = () => {
    const [userdata, setuserdata] = useState({});
    const history = useHistory();
    const callAboutPage = async()=>{
        try {
            const res = await fetch("/about",{
                method:"GET",
                headers: {
                    Accept:"application/json",
                    "Content-Type": "application/json"
                },
                credentials:"include"
            });
            console.log("The response"+res);
            const data = await res.json();
            console.log(data);
            setuserdata(data);

            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            
            history.push('/login');
        }
    }

    useEffect(()=>{
        callAboutPage();
    }, [])

    return (
        <>
            <section className="profile-info">
                <div className="container mt-5">
                    <form method="GET">
                        <div className="row">
                            <div className="col-9 pt-5 pb-3  mx-auto profile">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <img src={profilepic} className="img-fluid" alt=""></img>
                                        <div className="row">
                                            <div className="col-lg-8 text-center">
                                                <p>Work Link</p><br/>
                                                <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27" target="_blank">Youtube</a><br></br>
                                                <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27" target="_blank">Instagram</a><br></br>
                                                <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27" target="_blank">Facebook</a><br></br>
                                                <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27" target="_blank">Google</a><br></br>
                                                <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27" target="_blank">Linked In</a><br></br>
                                                <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27" target="_blank">Github</a><br></br>
                                                <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27" target="_blank">Whatsapp</a><br></br>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 pt-2">
                                        <h5>{userdata.name}</h5>
                                        <h6>{userdata.work}</h6>
                                        <p className="profile-rating mt-3 mb-5">Rankings <span> 1/10 </span></p>
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                            </li>

                                        </ul>

                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-4 col-sm-4 col-xs-4 mt-3">
                                                        <p>User Id</p>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 mt-3">
                                                        <p>{userdata._id}</p>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                        <p>Name</p>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                        <p>{userdata.name}</p>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                        <p>Email</p>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                        <p>{userdata.email}</p>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                        <p>Phone</p>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                        <p>{userdata.phone}</p>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 mb-3">
                                                        <p>Profession</p>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 mb-3">
                                                        <p>{userdata.work}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                            <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 mt-5">
                                                        <p>Experience</p>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 mt-5">
                                                        <p>Expert</p>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                        <p>Hourly Rate</p>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                        <p>105/h</p>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                        <p>Total Projects</p>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                        <p>230</p>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                        <p>English Level</p>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                        <p>Expert</p>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 mb-3">
                                                        <p>Availability</p>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 mb-3">
                                                        <p>6months</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <input type="submit" className="btn btn-success" value="Edit Profile" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default About;