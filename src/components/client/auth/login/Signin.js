import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../../../redux/actions/auth';
import Navbar from '../../../navbar/Navbar';
import './signin.css';

function Signin() {

  const initialState = { email : "" ,  password : ""}
  const [formData, setFormData] = useState(initialState)

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData)
      dispatch(login(formData, history))
  }
  const history = useHistory();
  const handleRoute = () => {
    history.push(`/signup`);
  };
  return (
    <div class="container-fluid p-0 mt-5.5rem" id="body">
      <Navbar />
        <div class="container mm">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6 ">
          <div class="card box-shadow-lg bg-white" id="card" >
            <div>
            <h4 class="mb-4 mt-5" id="signin">Sign in to your account</h4>
            <div class="m">     
            <form onSubmit={handleSubmit}>    
            <label id="email">Email</label>
            <div class="input-group ">
              <input
               name="email" 
               type="text"
               placeholder="Enter your e-mail" 
               class="form-control " 
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
            <div class="row">
            <div class="col-md-4">
            <label id="password" class="mt-4">Password</label>
            </div>
           <div class="col-md-4"></div>
            <div class="col-md-4">
           <label 
           id="password" 
           class="mt-4"
           ><a 
           href=""
           >
             Forgot Password?
           </a> 
           </label>
            </div>
            </div>
            <div class="input-group ">
            <input
             name="password" 
             type="password"
             placeholder="Enter your password" 
             class="form-control"  
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
            <button type="submit" class="btn" >Signin</button>
            </form>  
            </div>
            </div>   
         </div>
         <div>
            <button 
             id="signUp" 
             class="btn signup" 
             id="signup" 
             type="submit" 
            >
              Become a member 
              <a 
               id="signUp" 
               onClick={handleRoute}
              >
                Signup
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

export default Signin;



