import React,{useState} from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Login = () => {
    
    const [data,setData]=useState({
        phonenumber:"",
        password:""
     })
     const[auth,setAuth]=useState(false);
     const changeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value})
     }
    const submitHandler=e=>{
        e.preventDefault()
        axios.post("http://localhost:5000/login",data).then(
          res=>{localStorage.setItem("token",res.data.token);setAuth(true)}
        )
    }
    if((auth) && (data.phonenumber==="7893501943") ){ 
               return < Navigate to= "/dashboard"/>
         
        
    }
    else if (auth){
      return < Navigate to= "/userdashboard"/>
         
    }
    
  return (
     
    <div>
        <form onSubmit={submitHandler}>
        <label for="phonenumber">phonenumber</label>
        <input id="phonenumber" type="text" name="phonenumber" onChange={changeHandler}/>
        
        <br/>
        <label for="password">Password: </label>
        <input id="password" type="password"  name="password" onChange={changeHandler}/>
        <br/>
        <input type="submit" value="login"/>
        </form>
         
    </div>
  )
}

export default Login;