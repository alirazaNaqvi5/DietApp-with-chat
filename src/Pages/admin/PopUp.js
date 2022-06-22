import React from "react";
import { db } from "../../firebase";
import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";

export default function PopUp({showModal,setShowModal, data}) {
    console.table("data from adduser========>", data)
//   const [showModal, setShowModal] = React.useState(false);
  const [record, setRecord] = React.useState([]);
  const handleSelect = (e) => {
    // setSelect(e.target.value);
    if(e.target.value === "pr"){
        // get doctors record from firebase firestore database where status is false
        (async()=>{const citiesRef = collection(db, "doctors");
        const q = query(citiesRef, where("status", "==", false));
        const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            // setRecord (doc.data());
            setRecord([...record,doc.data()]);
            });})();
    }
    else if(e.target.value === "ar"){
        (async()=>{const citiesRef = collection(db, "doctors");
        const q = query(citiesRef, where("status", "==", true));
        const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            // setRecord (doc.data());
            setRecord([...record,doc.data()]);
            });})();
    }
    setShowModal(true);
    // if (e.target.value === "pr") {

    //   setShowModal(true);
    // }
  }
  
  return (
    <>
 
      <select className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" name="requests" id="req"
        onChange={handleSelect}
        >
    <option className="border font-semibold hover:bg-gray-300" value="sr">select requests</option>
    
      <option className="border font-semibold hover:bg-gray-300" value="pr" >pending requests</option>
      <option className="border font-semibold hover:bg-gray-300" value="ar">approved requests</option>
      
    </select>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-10xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {setShowModal(false); setRecord([]);}}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
               
                <div className="relative p-6 flex-auto">
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">Name</th>
                                <th className="border px-4 py-2">Email</th>
                                <th className="border px-4 py-2">Phone</th>
                          
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item,index)=>{
                                return(
                                    <tr>
                                        {
                                        record?
                                        <>
                                        <td className="border px-4 py-2">{item.name}</td>
                                        <td className="border px-4 py-2">{item.email}</td>
                                        <td className="border px-4 py-2">{item.phone}</td>
                                    

                                        {/* create two buttons for accept and reject  */}
                                       </>:<><h1> No Record </h1> </>}
                                    </tr>
                                )
                            }
                            )}
                        </tbody>
                    </table>
                </div>






                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    // onClick={() => setShowModal(false)}
                    onClick={() => {setShowModal(false); setRecord([]);}}

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