import React, { useState } from  'react';
    
    
const PersonData = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState("");  

    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,lastname, email, password ,confirmpassword};

    };
    
    return(
    <div id="bigdiv">
        <form onChange={ createUser }>
            <div className="input">
                <label>First Name: </label> 
                <input className="inputBox" type="text" value={firstname} onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div className="input">
                <label>Last Name: </label> 
                <input className="inputBox" type="text" value={lastname} onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div className="input">
                <label>Email Address: </label> 
                <input className="inputBox" type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div className="input">
                <label>Password: </label>
                <input className="inputBox" type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div className="input">
                <label>Conform Password: </label>
                <input className="inputBox" type="password" value={confirmpassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
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