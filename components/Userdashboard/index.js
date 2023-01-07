import React,{useEffect,useState}from 'react'
import {Link,Navigate} from "react-router-dom";
import axios from "axios";

const Userdashboard = () => {
  const [data,setData]=useState([]);
  
  useEffect(()=>{axios.get("http://localhost:5000/myprofile",{
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
        <h1 className='arogya'> Hlo user </h1>
        <ul>
          <i><Link to="/myprofile">My Profile</Link></i>
          <i><Link to="/login" onClick={()=>localStorage.removeItem("token")}>Logout </Link></i>
        </ul>

      </nav>
      <section>
        <div>
          {data.length===1?data.map(prof=><div>
            <h2>{prof.name}</h2>
            <p>{prof.phonenumber}</p>
            <p>{prof.pincode}</p>
          
            
            </div>

            ):<h1>slots</h1>}
        </div>
      </section>
      </div>)
      

}

export default Userdashboard
