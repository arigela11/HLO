import React,{useEffect,useState}from 'react'
import {Link,Navigate} from "react-router-dom";
import axios from "axios";

const Error = () => {
  const [data,setData]=useState([]);
  
  
  useEffect(()=>{axios.get("http://localhost:5000/allprofiles",{
    headers:{
      "x-token":localStorage.getItem('token')
    }

  }).then(res=>setData(res.data))
  
  },[])
  
  
  if (!localStorage.getItem("token")){
    return <Navigate to="/login"/>
  }


  return (
    
    <div>
      <nav className='navbar bg-dark'>
        <h1 className='arogya'> Arogya setu</h1>
        <ul>
          <i><Link to="/myprofile">My Profile</Link></i>
          <i><Link to="/login" onClick={()=>localStorage.removeItem("token")}>Logout </Link></i>
        </ul>

      </nav>
      <section>
        <div>
          {data.length>=1?data.map(profile=><div>
            <h2>{profile.name}</h2>
            <p>{profile.phonenumber}</p>
            <p>{profile.pincode}</p>
            
          
            
            </div>

            ):null}
            
        </div>
      </section>
      </div>)
      

}

export default Error
