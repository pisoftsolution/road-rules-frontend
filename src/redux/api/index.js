import axios from 'axios';
export const url = 'http://localhost:8092/api';

export const signup = (formData) => {
  return axios.post(`${url}/auth/signup`, formData);
}

export const login = (formData) => {
  return axios.post(`${url}/auth/login`, formData);
};

export const emailOtp = (email) => {
  return axios.get(`${url}/verify/email-otp?email=${email}`);
};

export const emailOtpVerify = (email, otp) => {
  return axios.get(`${url}/verify/email-otp-verify?email=${email}&&otp=${otp}`)
};

export const phoneOtp = (phone) => {
  return axios.get(`${url}/verify/phone-otp?phone=${phone}`);
};

export const phoneOtpVerify = (formData, email, phone) => {
  return axios.post(
    `${url}/verify/phone-otp-verify?phone=${phone}&&email=${email}`,
    formData
  );
};

export const getAboutcards = () => {
  return axios.get(`${url}/aboutcards/about-cards`)
};

export const addAboutcards = (formData) => {
  return axios.post(`${url}/aboutcards/add-about-cards`, formData)
};

export const editAboutcards = (data, id) => {
  return axios.put(`${url}/aboutcards/update-about-cards?id=${id}`, data)
};

export const getTestimonial = () => {
  return axios.get(`${url}/testimonial/testimonial`)
};

export const addTestimonial = (formData) => {
  return axios.post(`${url}/testimonial/add-testimonial`, formData)
};

export const editTestimonial = (data, id) => {
  return axios.put(`${url}/testimonial/update-testimonial?id=${id}`, data)
};

export const getChoose = () => {
  return axios.get(`${url}/choose/choose`)
};

export const addChoose = (formData) => {
  return axios.post(`${url}/choose/add-choose`, formData)
};

export const editChoose = (data, id) => {
  return axios.put(`${url}/choose/update-choose?id=${id}`, data)
};

export const getUsers = () => {
  return axios.get(`${url}/admin/admin/get-users`)
};
