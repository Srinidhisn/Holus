import React, { useEffect, useState } from "react"
import axios from "../axios"
import { useNavigate, Link } from "react-router-dom"
import '../styles/Signin.css'
//const express= require("express");

export default function Signup() {
    const history=useNavigate();
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [loggedInAs,setLoggedInAs]=useState('')
    //const [customer,setCustomer]=useState('');
    const navigate=useNavigate();
    async function submit(e){
        e.preventDefault();

            await axios.post("/users/signup",{loggedInAs,name,email,password})
            //to reset the input
            .then(()=>{
                setName("");
                setPassword("");
                setEmail('');
                setLoggedInAs('');
            }).catch((error)=>alert(error.message));
             navigate("/Home") };
    return (
        <div className="login-form">
    <form action="" method="post">
        <p className="text-center heading">Holus</p>
        <h2 className="pull-left">Let's Get Started</h2>     
        <p className="pull-left">Enter your email address or mobile number.</p>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Name" onChange={(e)=>setName(e.target.value)}  required="required"/>
        </div>
        <div className="form-group">
            <input type="email" className="form-control" placeholder="email" onChange={(e)=>setEmail(e.target.value)}  required="required"/>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="seller/customer" onChange={(e)=>setLoggedInAs(e.target.value)}  required="required"/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}  required="required"/>
        </div>
        {/* <div className="form-group">
            <input type="password" className="form-control" placeholder="Confirm Password" onChange={(e)=>props.cnfPwdLoginChange(e.target.value)} required="required"/>
        </div> */}
       
        <div className="form-group">
          <label className="pull-left checkbox-inline"><input type="checkbox"/> Accept Terms & Conditions</label>

            <button type="submit" className="btn btn-block btn-cust" onClick={submit}>Signup</button>
        </div>
        {/* <div className="clearfix">
            <label className="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
            <a href="#" className="pull-right">Forgot Password?</a> 
        </div>         */}
    {/* <p className="text-center">Already a Member? <a onClick={()=>props.buy("signin")}>Sign in</a></p> */}
    </form>
</div> )}