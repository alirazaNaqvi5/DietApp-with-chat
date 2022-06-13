import React from "react";
import { useState } from "react";

function SignUp() {
  const [formType, setFormType] = useState("1");
  return (
    <div
      
    >
      <div className="">
        <img
          className="opacity-90"
          style={{ width: " 100vw", height: "100vh" , position:'fixed', top:'0px', bottom:'0px'}}
          src="https://th.bing.com/th/id/R.4b14da62370c84c564ab8333d7259622?rik=R2PN9wBI4goQ2w&pid=ImgRaw&r=0"
          alt="cotnent"
        />
      </div>
      <div
        className="container px-5 py-24 mx-auto mt-0 flex items-center justify-center"
      >
        <div
          style={{ margin_top: "-850px" }}
          className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col  
        w-full  md:mt-0 relative @media (min-width: 768px)
        .md\:mt-0 {
            margin-top: -850px;
        } z-10 shadow-md"
        >
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Register Now
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            {" "}
            As Doctor or Patient{" "}
          </p>

          {/* SELECT FORM TYPE FOR PATIENT OF DOCTOR */}
          <div className="relative mb-4">
            <h1 className="text-xl">I AM A</h1>
            <div className="flex justify-center items-center w-1/2">
              <label
                htmlFor="radio"
                className="leading-7 text-sm text-gray-600"
              >
                Patient
              </label>
              <input
                type="radio"
                id="radio"
                name="radio"
                checked={formType === "1"}
                onChange={(e) => {
                  setFormType("1");
                }}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label
                htmlFor="radio"
                className="leading-7 text-sm text-gray-600"
              >
                Doctor
              </label>
              <input
                type="radio"
                id="radio"
                name="radio"
                checked={formType === "2"}
                onChange={(e) => {
                  setFormType("2");
                }}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          {formType === "1" ? (
            <>
            <div className="relative mb-4">
                <label
                  htmlFor="UserName"
                  className="leading-7 text-sm text-gray-600"
                >
                  username
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="Password"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="Confirm Password"
                  className="leading-7 text-sm text-gray-600"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="Confirm password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </>
          ) : (
            <>
             <div className="relative mb-4">
                <label
                  htmlFor="UserName"
                  className="leading-7 text-sm text-gray-600"
                >
                  username
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="Name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="Name"
                  id="Name"
                  name="Name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="Password"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="Age"
                  className="leading-7 text-sm text-gray-600"
                >
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="Age"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="Contact"
                  className="leading-7 text-sm text-gray-600"
                >
                  Contact
                </label>
                <input
                  type="tel"
                  id="num"
                  name="num"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="Adress"
                  className="leading-7 text-sm text-gray-600"
                >
                  Address
                </label>
                <input
                  type="Address"
                  id="address"
                  name="Address"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="Experience and About"
                  className="leading-7 text-sm text-gray-600"
                >
                  Experience and About
                </label>
                <input
                  type="text"
                  id="text"
                  name="text"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="Experience and About"
                  className="leading-7 text-sm text-gray-600"
                >
                  Verify your identity
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="Experience and About"
                  className="leading-7 text-sm text-gray-600"
                >
                  Attach your Degree/Certificate
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </>
          )}

          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
