import React ,{useEffect,useState} from "react";

const Home = ()=>{

    
    const [username, setusername] = useState('');
    const [show,setshow] = useState(false);
    const callHomePage = async()=>{
        try {
            const res = await fetch("/getdata",{
                method:"GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log("The response"+res); 
            const data = await res.json();
            console.log(data);
            setusername(data.name);
            setshow(true);

        } catch (err) {
            alert(err);
        }
    }

    useEffect(()=>{
        callHomePage();
    }, [])
    return(
        <>
            <div className="home d-flex align-items-center justify-content-center flex-column ">
            <h1>{username}</h1>
            <h2>{ show ? 'Happy to see you again' :'We are the Mern Developer' }</h2>
            </div>
        </>
    )
}

export default Home;