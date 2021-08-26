import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { phoneOtpVerify } from '../../../../redux/actions/verify';
import Navbar from '../../../navbar/Navbar';

function PhoneOtp() {

    const initialState = { phoneOtp: "" }
    const [formData, setFormData] = useState(initialState)

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(phoneOtpVerify(formData.phoneOtp))
            .then((res) => {
                if (res) {
                    history.push('/');
                }
            })
    }
    const history = useHistory();
    // const handleRoute = () => {
    //     history.push(`/email-otp`); 
    // };
    return (
        <div className="container-fluid p-0 mt-5.5rem" id="body">
            <Navbar />
            <div className="container mm">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 ">
                        <div className="card box-shadow-lg bg-white" id="card" >
                            <div>
                                <h4 className="mb-4 mt-5" id="signin">Please enter the phone OTP</h4>
                                <div className="m">
                                    <form onSubmit={handleSubmit}>
                                        <label id="email">OTP</label>
                                        <div className="input-group ">
                                            <input
                                                name="phoneOtp"
                                                type="text"
                                                placeholder="Enter the 6 digit OTP"
                                                className="form-control "
                                                aria-label="Username" aria-describedby="addon-wrapping"
                                                value={formData.phoneOtp}
                                                onChange={(e) => {
                                                    setFormData({
                                                        ...formData,
                                                        [e.target.name]: e.target.value
                                                    })
                                                }}
                                            />
                                        </div>
                                        <button
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

export default PhoneOtp;