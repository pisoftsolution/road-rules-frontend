// import OtpInput from 'react-otp-input';
import React from 'react';
import './otp.css';

export default function App() {
  // const [code, setCode] = useState('');
  // const handleChange = (code) => setCode(code);
  return (
    <div className="Otp">
      <h1>Hello</h1>
      <div id="inpt">
        {/* <OtpInput
          size="large"
          value={code}
          onChange={handleChange}
          numInputs={6}
          isInputNum={true}
          shouldAutoFocus={true}
        /> */}
      </div>
      <input
        aria-label="Please enter verification code. Digit 1"
        isInputNum={true}
        shouldAutoFocus={true}
        value={''}
        size="large"
        // style="width: 2em;text-align: center;"
      />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
