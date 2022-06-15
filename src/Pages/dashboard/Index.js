import React, { useEffect } from "react";
import { db } from "../../firebase";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { useAuth } from "../../hooks/useAuth";

export default function Dashboard() {
  useEffect(() => {}, []);

  return (
    // <>
    <div id="patient" className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-10">
        <h1 className="sm:text-3xl text-2xl font-bold  title-font mb-2  text-gray-900">
          Patient's Dashboard
        </h1>
        <h2 className=""> Welcome PATIENT_NAME</h2>

        <h3>
          “Our food should be our medicine and our medicine should be our food“
        </h3>
      </div>
      <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div className="relative  text-2xl font-bold flex-grow w-full">
          <label
            htmlFor="full-name"
            className="leading-7 font-bold text-xl text-black"
          >
            Write about your problem ?
          </label>

          <textarea className="w-full  bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200  outline-none text-black py-1 text-xl font-bold px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <br />
      </div>
      <br />
      <div className="flex justify-center text-center">
        <button
          // onClick={}
          onClick={async() => {
            const docRef = doc(db, "users", "Shayan" );
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              console.log("Document data:", docSnap.data());
              // const data = [{
              //   newRef:
              // }];
              // setDoc(docRef, data);
              // const data = {};
              setDoc(docRef,{
                status: 0,
                  problem: "test2"} , { merge: false });

            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }

          }}
          className=" text-white bg-green-500 border-0 py-2 px-8  text-2xl font-bold focus:outline-none hover:bg-green-600 rounded "
        >
          submit
        </button>
      </div>
      <br />
      <div class="flex flex-wrap -m-4">
        <div class="xl:w-full md:w-full p-4">
          <div class="border border-gray-200 p-6 rounded-lg">
            <div class="w-10  h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <img src="" />
            </div>
            <h2 class=" text-2xl font-bold text-gray-900  title-font mb-2">
              {" "}
              Hey Dear !{" "}
            </h2>
            <p class="leading-relaxed   text-2xl font-bold">
              please wait a moment ! <br /> your request is in pending wait for
              the response.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
