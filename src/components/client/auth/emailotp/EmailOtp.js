import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { emailOtpVerify } from '../../../../redux/actions/verify';
import Navbar from '../../../common/navbar/Navbar';
// import Navbar from '../../../common/navbar/Navbar';

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
        <div className="container-fluid p-0 mt-5.5rem" id="body">
            <Navbar/>
            <div className="container mm">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 ">
                        <div className="card box-shadow-lg bg-white" id="card" >
                            <div>
                                <h4 className="mb-4 mt-5" id="signin">Please enter the Email OTP</h4>
                                <div className="m">
                                    <form onSubmit={handleSubmit}>
                                    <label 
                                    id="email"
                                    >
                                        OTP
                                    </label>
                                    <div className="input-group ">
                                        <input type="text"
                                          name="emailOtp"
                                          placeholder="Enter the 6 digit OTP" 
                                          className="form-control " 
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
                                    onClick={handleRoute}
                                      type="submit"
                                      className="btn" 
                                     >
                                        Submit
                                    </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailOtp;