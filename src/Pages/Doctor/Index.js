import React from "react";
import Chat from "../../components/Chat";
import { MessageCard } from "./MessageCard";
import { useAuth } from "../../hooks/useAuth";

import { db } from "../../firebase";
import { collection, query, where, getDocs, doc, setDocs, onSnapshot, orderBy } from "firebase/firestore";
function Doctor() {
  const { user } = useAuth();
  const [visible, setVisible] = React.useState(false);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
(   async()=>{ 
  const subColRef = collection(db, `${user.phone}`, "+923211737891", "chat");
// odd number of path segments to get a CollectionReference

// equivalent to:
// .collection("collection_name/doc_name/subcollection_name") in v8

// use getDocs() instead of getDoc() to fetch the collection

// const qSnap =await getDocs(subColRef)
// get realtime messages
onSnapshot(query(subColRef, orderBy('time')), (qSnap) => {
  const docs = qSnap.docs.map((doc) => {
    console.log(doc.data());
    return doc.data();
  }
  );
  setData(docs);
}
);
// setData(qSnap.docs.map(d => (d.data())).reverse())
// console.log(qSnap.docs.map(d => (d.data())))

})();

  }, []);
  return (
    <>
      <section class="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              {" "}
              Nutrionist's Dashboard
            </h1>
            <h2 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              “ The first wealth is health “
            </h2>
            <h3 className=" font-semibold text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Providing nutritional counseling and assessing nutritional needs,
              health plans, current diets, and diet restrictions.
            </h3>
          </div>
          {/* <MessageCard/> */}
{/* ================================================ message cards */}




<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Messages From Patients</h1>
    </div>
    <div className="flex flex-wrap -m-2">
      <div className="p-2 lg:w-auto md:w-1/2 w-auto">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Holden Caulfield</h2>
            
          </div>
        </div>
      </div>
    
    </div>
  </div>
</section>















{/* ================================================================= */}




















          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Authentic High Protein
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">High Fiber</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Low Processed Sugar
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Low Saturated Fat
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">Vitamin C</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Vitamins, Minerals,Proteins,Fats,Carbohydrates,Water
                </span>
              </div>
            </div>
          </div>
          <div className="">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Write prescription here !
            </label>

            <textarea className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button class="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Prescribe
          </button>
        </div>
        {/* <div > */}
        <Chat visible={visible} setVisible={setVisible} data={data} />
      {/* </div> */}
      </section>
      
    </>
  );
}
export default Doctor;
