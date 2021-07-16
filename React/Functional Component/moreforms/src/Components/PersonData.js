import React, { useState } from  'react';
    
    
const PersonData = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState("");  
    const [firstnameerror, setFirstnameError] = useState("");  
    const [lastnameerror, setLastnameError] = useState("");  
    const [emailerror, setEmailError] = useState("");  
    const [passworderror, setPasswordError] = useState("");  
    const [confirmpassworderror, setConfirmPasswordError] = useState("");  



    
    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = { firstname,lastname, email, password ,confirmpassword};
    //     setFirstname("");
    //     setLastname("");
    //     setEmail("");
    //     setPassword("");
    //     setConfirmPassword("");

    // };

    const firstnameError = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 2) {
            setFirstnameError("First Name must be at least 2!");
        }else{
            setFirstnameError("");

        }
    }
    

    const lastnameError = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 2) {
            setLastnameError("Last Name must be at least 2!");
        }else{
            setLastnameError("");

        }
    }
    const emailError = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 2) {
            setEmailError("Email must be at least 2!");
        }else{
            setEmailError("");

        }
    }
    const passwordError = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8!");
        }else{
            setPasswordError("");

        }
    }

    const passwordConfirmError = (e) => {
        setConfirmPassword(e.target.value);
        if(password != confirmpassword) {
            setConfirmPasswordError("Password must match!");
        }else{
            setConfirmPasswordError("");

        }
    }
    
    return(
    <div id="bigdiv">
        <form>
            <div className="input">
                <label>First Name: </label> 
                <input className="inputBox" type="text" value={firstname} onChange={ firstnameError } />
                  {
                    firstnameerror ?
                    <p style={{color:'red'}}>{ firstnameerror }</p> :
                    ''
                }
            </div>
            <div className="input">
                <label>Last Name: </label> 
                <input className="inputBox" type="text" value={lastname} onChange={ lastnameError } />
                {
                    lastnameerror ?
                    <p style={{color:'red'}}>{ lastnameerror }</p> :
                    ''
                }
            </div>
            <div className="input">
                <label>Email Address: </label> 
                <input className="inputBox" type="email" value={email} onChange={emailError } />
                {
                    emailerror ?
                    <p style={{color:'red'}}>{ emailerror }</p> :
                    ''
                }
            </div>
            <div className="input">
                <label>Password: </label>
                <input className="inputBox" type="password" value={password} onChange={passwordError } />
                {
                    passworderror ?
                    <p style={{color:'red'}}>{ passworderror }</p> :
                    ''
                }
            </div>
            <div className="input">
                <label>Conform Password: </label>
                <input className="inputBox" type="password" value={confirmpassword} onChange={ passwordConfirmError } />
                {
                    confirmpassworderror ?
                    <p style={{color:'red'}}>{ confirmpassworderror }</p> :
                    ''
                }
            </div>
        </form>
<div>
    <h4>Your Form Data</h4>
    <p>First Name:    {firstname}</p>
    <p>Last Name:    {lastname}</p>
    <p>Email:    {email}</p>
    <p>Password:    {password}</p>
    <p>Conform Password:    {confirmpassword}</p>

</div>

</div>
    );
};
    
export default PersonData;