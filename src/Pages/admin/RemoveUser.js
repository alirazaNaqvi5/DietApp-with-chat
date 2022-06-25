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
  deleteDoc
} from "firebase/firestore";

export default function RemoveUser() {
  const doctor = [
    {
      address: "Tehsil & Distt Mianwali, P/O Box Pakki Shah Mardan,",
      age: "21",
      email: "alinaqvi097@gmail.com",
      experience: "kjkkhkhkkh",
      name: "Ali Naqvi",
      phone: "+923211737891",
      status: false,
      type: "doctor",
    },
  ];
  const [showModal, setShowModal] = React.useState(false);
  const [record, setRecord] = React.useState([]);
  const handleSelect = async (e) => {
    // setSelect(e.target.value);
    // if(e.target.value === "pr"){
    // get doctors record from firebase firestore database where status is false

    // const promise = new Promise(async(resolve, reject)=>{
      const citiesRef = collection(db, "users");
    // const q = query(citiesRef, where("assignD", "!=", ""));
    // const querySnapshot = await getDocs(q);
    // console.log("querySnapShot from remove user modal", querySnapshot);
    // setShowModal(true);
    // resolve(querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   // console.log(doc.id, " => ", doc.data());
    //   // setRecord (doc.data());
    //   return doc.data();
    //   // setRecord([...record, doc.data()]);
    // }))

    // })

    // console.log("promise output",await Promise.all(promise))



    onSnapshot(query(citiesRef), (qSnap) => {
      const docs = qSnap.docs.map((doc) => {
        console.log(doc.data());
        return doc.data();
      }
      );
      console.log("dataaaaaaaaaaaaaaa=================>",docs);
      setRecord(docs)
      setShowModal(true)
    }
    );
    
    // if (e.target.value === "pr") {

    //   setShowModal(true);
    // }
  };

  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button> */}

      <div className="flex-grow">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
          Remove user's
        </h2>
        <p className="leading-relaxed text-base">
          From here you can easily remove/block users from your website.
        </p>
        <button
          onClick={handleSelect}
          className="mt-3 text-white bg-green-500 border-0 py-1 px-2  text-1xl font-bold focus:outline-none hover:bg-green-600 rounded "
        >
          Remove users
        </button>
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
                {/*body*/}

                {/* <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div> */}

                {/* {
                    doctor.map((item,index)=>{
                        return(
                            <div className="relative p-6 flex-auto">
                                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                    {item.name}
                                </p>
                                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                    {item.email}
                                </p>
                                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                    {item.phone}
                                </p>
                                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                    {item.address}
                                </p>
                                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                    {item.experience}
                                </p>
                                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                    {item.age}
                                </p>
                               
                            </div>
                        )
                    })
                } */}

                {/* create table of doctors details */}
                <div className="relative p-6 flex-auto">
                  <table className="table-auto">
                    <thead>
                      <tr>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Email</th>
                        <th className="border px-4 py-2">Phone</th>
                        <th className="border px-4 py-2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {record.map((item, index) => {
                        return (
                          <tr key={index}>
                            <>
                              <td className="border px-4 py-2">{item.name}</td>
                              <td className="border px-4 py-2">{item.email}</td>
                              <td className="border px-4 py-2">{item.phone}</td>

                              {/* create two buttons for accept and reject  */}
                              <td className="border px-4 py-2">
                                <button
                                  className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  onClick={() => {
                                    const doctorRef = doc(
                                      db,
                                      "users",
                                      `${item.phone}`
                                    );
                                    deleteDoc(doctorRef);
                                    // setRecord([]);
                                    // setShowModal(false);
                                  }}
                                >
                                  Remove
                                </button>
                                {/* <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            onClick={() => setShowModal(false)}
                                            >
                                                Reject
                                            </button> */}
                              </td>
                            </>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
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
