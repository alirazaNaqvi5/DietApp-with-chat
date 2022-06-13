import React, {useState} from "react";
import { Link } from "react-router-dom";
import { authentication } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

function Login(){


  const [number, setNumber] = useState('');
  const [showOTP, setShowOTP] = useState("hidden");
  const [otp, setOTP] = useState('');

  const generateCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        
      }
    }, authentication);
  }

  const requestOtp = (number) => {
  
    generateCaptcha();
    let appVerifier = window.recaptchaVerifier;
   signInWithPhoneNumber( authentication , "+"+number, appVerifier ).then((confirmationResult) => {
    // SMS sent. Prompt user to type the code from the message, then sign the
    // user in with confirmationResult.confirm(code).
    setShowOTP("relative mb-4 ");
    window.confirmationResult = confirmationResult;
    console.log(confirmationResult);
    // ...
  }).catch((error) => {
    // Error; SMS not sent
    // ...
    console.log(error);
  })}


  const confirmOtp = (e) => {
    // setOTP(e.target.value);
    if(e.target.value.length === 6){
    window.confirmationResult.confirm(e.target.value).then((result) => {
      // User signed in successfully.
      console.log(result);
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      console.log(error);
    }
    );
  }}


    return(
        <>
        <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          {/* <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe> */}
          <img
            className="bg-cover opacity-90"
            style={{ width: "100vw", height: "100vh" }}
            src="https://th.bing.com/th/id/R.32b649c6349b0ba659cdebc84526108b?rik=TY6AW38FsE4gbQ&pid=ImgRaw&r=0"
          />
          <div className="font-extrabold text-2xl absolute pb-20"></div>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Log In Form
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Log In or Sign Up{" "}
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
                Phone number
              </label>
              <input
                type="number"
                id="phone"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                  console.log(e.target.value);
                }}
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className={showOTP}>
              <label
                htmlFor="otp"
                className="leading-7 text-sm text-gray-600"
              >
                OTP
              </label>
              <input
                type="number"
                id="otp"
                name="otp"
                onChange={(e)=>confirmOtp(e)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={() => {
                requestOtp(number);
              }}
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              LOG IN
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Don't have account ?{" "}
              <Link className="text-blue-900 font-bold" to="/signup">
                Sign Up now
              </Link>
            </p>
          </div>
          </div>
          <div id="sign-in-button" ></div>
      </section>
        </>
    )
}
export default Login;