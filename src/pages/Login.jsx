import React from "react";
import './Login.css'


const Login = () =>{
    return (
        <div className="loginsignup"> 
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text " placeholder="Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button onClick={()=>{alert("Sorry ! there is no backend connectiviy")}}>Continue</button>
                <p className="loginsignup-login">Already have and an account ? <span>Login Here</span></p>
                <div className="loginsignup-agree">
                <input type="checkbox" name="" id="" />
                <p >By continuing , i agree to the term of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default Login;