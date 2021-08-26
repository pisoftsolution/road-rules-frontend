import axios from "axios";
export const url = "http://localhost:8092/api";

export const signup = (formData) => {
    return axios.post(`${url}/auth/signup`, formData)
}; 

export const login = (formData) => {
    return axios.post(`${url}/auth/login`, formData)
};

export const emailOtp = (email) => {
    return axios.get(`${url}/verify/email-otp?email=${email}`)

};

export const emailOtpVerify = (email,otp) => {
    return axios.get(`${url}/verify/email-otp-verify?email=${email}&&otp=${otp}`)

};

export const phoneOtp = (phone) => {
    return axios.get(`${url}/verify/phone-otp?phone=${phone}`)
};

export const phoneOtpVerify = (formData,email,phone) => {
    return axios.post(`${url}/verify/phone-otp-verify?phone=${phone}&&email=${email}`, formData)
};