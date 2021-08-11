import React, { useState, useEffect } from "react";

const Contact = () => {
    const [userdata, setuserdata] = useState({ name: '', email: '', phone: '', message: '' });
    const callContactPage = async () => {
        try {
            const res = await fetch("/getdata", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log("The response" + res);
            const data = await res.json();
            console.log(data);
            setuserdata({ ...userdata, name: data.name, email: data.email, phone: data.phone });

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            alert(err);
        }
    }

    useEffect(() => {
        callContactPage();
    }, [])

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setuserdata({ ...userdata, [name]: value })
    }
    const sendData = async (e) => {
        e.preventDefault();
        console.log("click")
        const { name, email, phone, message } = userdata;
        const res = await fetch("/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, message
            })
        });
        const data = await res.json();

        if (!data) {
            console.log("message not found");
        } else {
            alert("Message Send");
            setuserdata({ ...userdata, message: "" })
        }
    }
    return (
        <>
            <section className="contact-us mt-4">
                <div className="contact">
                    <div className="box text-center">
                        <img src="" alt="" />
                        <h5>Phone</h5>
                        <p>+9123765932</p>
                    </div>
                    <div className="box text-center">
                        <img src="" alt="" />
                        <h5>Email</h5>
                        <p>kk@sh.com</p>
                    </div>
                    <div className="box text-center">
                        <img src="" alt="" />
                        <h5>Address</h5>
                        <p>Ghaziabad</p>
                    </div>
                </div>
                <div className="contact-info mt-3">
                    <div className="box-in">
                        <h1 className="text-center mt-3 mb-4">Get in Touch</h1>
                        <form method="POST">
                            <div className="contact">
                                <input type="text" value={userdata.name} onChange={handleInputs}
                                    name='name' placeholder="Your Name" />
                                <input type="email" value={userdata.email} onChange={handleInputs}
                                    name='email' placeholder="Your Email" />
                                <input type="number" value={userdata.phone} onChange={handleInputs}
                                    name='phone' placeholder="Your Phone Number" />
                            </div>
                            <div className="contact_in">
                                <textarea className="text-center mb-5 mt-3" value={userdata.message} name='message'
                                    onChange={handleInputs} placeholder="Message" cols="50" rows="5" ></textarea>
                                <button type="submit" onClick={sendData} className="mb-5">Send Message</button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;