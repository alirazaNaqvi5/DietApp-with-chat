import React from "react";
import { db } from "../../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  onSnapshot,
  deleteDoc,
  addDoc
} from "firebase/firestore";

export default function AddMeal() {
  const [meal, setMeal] = React.useState({
    Fats: "",
    Proteints: "",
    Carbs: "",
    Dinner: "",
    Lunch: "",
    BreakFast: "",
    

  });
  const [showModal, setShowModal] = React.useState(false);
  const [record, setRecord] = React.useState([]);
  const handleSelect = async (e) => {
    const citiesRef = collection(db, "users");

    onSnapshot(query(citiesRef, where("assignD", "!=", "")), (qSnap) => {
      const docs = qSnap.docs.map((doc) => {
        console.log(doc.data());
        return doc.data();
      });
      //   console.log("dataaaaaaaaaaaaaaa=================>", docs);
      setRecord(docs);
      setShowModal(true);
    });

    // if (e.target.value === "pr") {

    //   setShowModal(true);
    // }
  };

  return (
    <>
      <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col w-[100%]">
        <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0"></div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            Add meal/diet plan
          </h2>
          <p className="leading-relaxed text-base">
            Here you can easily add meal/diet plan's to your website
          </p>
          <button
            onClick={handleSelect}
            className="mt-3 text-white bg-red-500  border-0 py-1 px-2  text-1xl font-bold focus:outline-none hover:bg-red-700 rounded "
          >
            Add meal
          </button>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-10xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      setShowModal(false);
                      setRecord([]);
                    }}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                {/* create table of doctors details */}
                <div className="relative p-6 flex-auto">


                  <div className="w-96">
                    <label>
                      <strong>BreakFast</strong>
                    </label>
                    {/* <br /> */}
                    <textarea
                         value={meal.BreakFast}
                        onChange={(e)=>{
                            setMeal({...meal, BreakFast: e.target.value})
                        }}
                      style={{ borderColor: "green", borderWidth: "2px", width:'100%' }}
                    ></textarea>
                  </div>


                  <div className="w-96">
                    <label>
                      <strong>Lunch</strong>
                    </label>
                    {/* <br /> */}
                    <textarea
                     value={meal.Lunch}
                     onChange={(e)=>{
                         setMeal({...meal, Lunch: e.target.value})
                     }}
                      style={{ borderColor: "green", borderWidth: "2px", width:'100%' }}
                    ></textarea>
                  </div>


                  <div className="w-96">
                    <label>
                      <strong>Dinner</strong>
                    </label>
                    {/* <br /> */}
                    <textarea
                     value={meal.Dinner}
                     onChange={(e)=>{
                         setMeal({...meal, Dinner: e.target.value})
                     }}
                      style={{ borderColor: "green", borderWidth: "2px", width:'100%' }}
                    ></textarea>
                  </div>

                  <div className="w-96">
                    <label>
                      <strong>Carbs</strong>
                    </label>
                    {/* <br /> */}
                    <textarea
                     value={meal.Carbs}
                     onChange={(e)=>{
                         setMeal({...meal, Carbs: e.target.value})
                     }}
                      style={{ borderColor: "green", borderWidth: "2px", width:'100%' }}
                    ></textarea>
                  </div>



                  <div className="w-96">
                    <label>
                      <strong>Proteints</strong>
                    </label>
                    {/* <br /> */}
                    <textarea
                     value={meal.Proteints}
                     onChange={(e)=>{
                         setMeal({...meal, Proteints: e.target.value})
                     }}
                      style={{ borderColor: "green", borderWidth: "2px", width:'100%' }}
                    ></textarea>
                  </div>


                  <div className="w-96">
                    <label>
                      <strong>Fats</strong>
                    </label>
                    {/* <br /> */}
                    <textarea
                     value={meal.Fats}
                     onChange={(e)=>{
                         setMeal({...meal, Fats: e.target.value})
                     }}
                      style={{ borderColor: "green", borderWidth: "2px", width:'100%' }}
                    ></textarea>
                  </div>




                </div>






                <div className="text-center mb-5">
                  <button
                    onClick={() => {
                      if (
                        meal.Fats !== "" ||
                        meal.Proteints !== "" ||
                        meal.Carbs !== "" ||
                        meal.Dinner !== "" ||
                        meal.Lunch !== "" ||
                        meal.BreakFast !== ""
                      ) {
                        const doctorRef = collection(db, "MealPLans");
                        addDoc(doctorRef, meal).then(() => {
                          setMeal({
                            Fats: "",
                            Proteints: "",
                            Carbs: "",
                            Dinner: "",
                            Lunch: "",
                            BreakFast: "",
                            
                        
                          });
                          alert("Meal Plan Added Successfully");
                        });
                        // setRecord([]);
                        // setShowModal(false)
                      } else {
                        alert("PLEASE FILL ALL DETAILS");
                      }
                    }}
                    className="mt-3  text-white bg-green-500 border-0 py-3 px-6  text-2xl font-bold focus:outline-none hover:bg-green-600 rounded "
                  >
                    Add
                  </button>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    // onClick={() => setShowModal(false)}
                    onClick={() => {
                      setShowModal(false);
                      setRecord([]);
                    }}
                  >
                    Close
                  </button>
                  {/* <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
