import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { emailOtpVerify } from '../../../../redux/actions/verify';
import Navbar from '../../../navbar/Navbar';

function EmailOtp() {

    const initialState = { emailOtp : ""}
    const [formData, setFormData] = useState(initialState)

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(emailOtpVerify(formData.emailOtp,history))
    }

    const history = useHistory();
    const handleRoute = () => {
        history.push(`/signin`);
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
                                <h4 class="mb-4 mt-5" id="signin">Please enter the Email OTP</h4>
                                <div class="m">
                                    <form onSubmit={handleSubmit}>
                                    <label 
                                    id="email"
                                    >
                                        OTP
                                    </label>
                                    <div class="input-group ">
                                        <input type="text"
                                          name="emailOtp"
                                          placeholder="Enter the 6 digit OTP" 
                                          class="form-control " 
                                          aria-label="Username" aria-describedby="addon-wrapping"
                                          value={formData.emailOtp}
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
                                         Submit
                                    </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailOtp;