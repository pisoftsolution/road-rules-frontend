import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import './signup.css';
import { useHistory } from 'react-router-dom';
import { signup } from '../../../../redux/actions/auth';
import { emailOtp } from '../../../../redux/actions/verify';
import Navbar from '../../../navbar/Navbar';

function Signup() {

    const initialState = { email : "" ,  password : "", phone: "", fullName: ""}
    const [formData, setFormData] = useState(initialState)

    const dispatch = useDispatch();  

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signup(formData, history))
        .then(res=>{
            console.log(res);
            localStorage.setItem("email", formData.email);
            localStorage.setItem("phone", formData.phone);
            dispatch(emailOtp());
        })
    }
    const history = useHistory();
    const handleRoute = () => {
    history.push(`/phoneotp`);
  };
  return (
        <div class="container-fluid p-0 mt-5.5rem" id="body2">
            <Navbar />
            <div class="container mm">
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6 ">
                    <div class="card box-shadow-lg bg-white" id="card2" >
                        <div>
                            <h4 class="mb-4 mt-5" id="signin2">Welcome to Road-Rules, Signup here...</h4>
                            <div class="m">
                                <form onSubmit={handleSubmit}>
                                <label 
                                id="email"
                                >
                                    Full Name
                                </label>
                                <div class="input-group ">
                                <input
                                 name="fullName"  
                                 type="text"
                                 placeholder="Enter your fullName" 
                                 class="form-control " 
                                 aria-label="Username" 
                                 aria-describedby="addon-wrapping"
                                 value={formData.fullName}
                                 onChange={(e)=>{
                                 setFormData({
                                   ...formData,
                                   [e.target.name] : e.target.value
                                    })
                                }} 
                                />
                                </div>
                                <div class="row">
                                <div class="col-md-4">
                                <label id="email" class="mt-4">Email</label>
                                </div>
                                <div class="col-md-4"></div>
                               </div>
                                <div class="input-group ">
                                <input
                                 name="email" 
                                 type="text"
                                 placeholder="Enter your e-mail" 
                                 class="form-control" 
                                 aria-label="Username" 
                                 aria-describedby="addon-wrapping"
                                 value={formData.email}
                                 onChange={(e)=>{
                                 setFormData({
                                    ...formData,
                                    [e.target.name] : e.target.value
                                     })
                                }} 
                                />
                                </div>
                                <label 
                                id="email" 
                                class="mt-4"
                                >
                                    Phone Number
                                </label>
                                <div class="input-group ">
                                <input
                                 name="phone" 
                                 type="text"
                                 placeholder="Enter your Phone Number (with country code)" 
                                 class="form-control" 
                                 aria-label="Phone Number" 
                                 aria-describedby="addon-wrapping"
                                 value={formData.phone}
                                 onChange={(e)=>{
                                 setFormData({
                                   ...formData,
                                   [e.target.name] : e.target.value
                                    })
                                }} 
                                />
                                </div>
                                <label id="password" class="mt-4">Password</label>
                                <div class="input-group ">
                                <input
                                 name="password" 
                                 type="Password"
                                 placeholder="Enter your password" 
                                 class="form-control" 
                                 aria-label="Password" 
                                 aria-describedby="addon-wrapping"
                                 value={formData.password}
                                 onChange={(e)=>{
                                 setFormData({
                                  ...formData,
                                  [e.target.name] : e.target.value
                                 })
                                }} 
                                />
                                </div>                               
                                <button 
                                 type="submit"
                                 class="btn"
                                >
                                    Signup
                                </button>
                                </form>
                            </div>
                        </div>
                    </div>
                <div>
                <button 
                 type="submit" 
                 id="signUp" 
                 class="btn signup" 
                 id="signup" 
                 type="submit"
                 >
                     Already a member 
                <a 
                 id="signUp"
                >
                    Signin
                </a>
                </button>
            </div>
            <div class="col-md-2">
            </div>
         </div>
      </div>
   </div>
</div>

    )
}

export default Signup;



