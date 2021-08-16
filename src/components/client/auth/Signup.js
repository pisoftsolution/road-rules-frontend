import React from 'react';

function Signup() {
    return (
      <div>
          <h1>Sign into your account</h1>
          <label>Email</label>
          <input type="text" placeholder="Enter your E-mail"/>
          <br/>
          <br/>
          <label>Password</label>
         <input type="password" placeholder="Enter your password"/>
         <br/>  
         <button>Signin</button>    
      </div>
    )
}
export default Signup;