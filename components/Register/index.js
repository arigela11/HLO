import React ,{useState} from 'react'
import { Link} from 'react-router-dom';
import axios from "axios"

const Register = () => {
  
  const [data,setData]=useState({
    name:"",
    phonenumber:"",
    age:"",
    pincode:"",
    password:"",
    confirmpassword:"",
    adharno:""})
 const changeHandler=e=>{
    setData({...data,[e.target.name]:e.target.value})
 }
const submitHandler=e=>{
    e.preventDefault()
    axios.post("http://localhost:5000/register",data).then(
          console.log("datasende")
        )
}
return (
 
<div>
<nav className='navbar bg-dark'>
        <h1 className='arogya'> Arogya setu</h1>
        <ul>
          
          <i><Link to="/login" >Login</Link></i>
        </ul>

      </nav>
    <form onSubmit={submitHandler}>
    <label for="name">name</label>
    <input id="name" type="text" name="name" onChange={changeHandler}/>
    <br/>
    <label for="phonenumber">phonenumber</label>
    <input id="phonenumber" type="text" name="phonenumber" onChange={changeHandler}/>
    <br/>
    <label for="age">age</label>
    <input id="age" type="text" name="age" onChange={changeHandler}/>
    <br/>
    <label for="pincode">pincode</label>
    <input id="pincode" type="text" name="pincode" onChange={changeHandler}/>
    <br/>
    
    <label for="password">Password: </label>
    <input id="password" type="password"  name="password" onChange={changeHandler}/>
    <br/>
    <label for="confirmpassword">ConfirmPassword: </label>
    <input id="confirmpassword" type="password"  name="confirmpassword" onChange={changeHandler}/>
    <br/>
    <label for="adharno">adharno</label>
    <input id="adharno" type="text" name="adharno" onChange={changeHandler}/>
    
    <br/>
    <input type="submit" value="login"/>
    </form>
     
</div>
)
}

export default Register;