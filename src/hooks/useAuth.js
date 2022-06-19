import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage"
import {db} from "../firebase";
import { doc, getDoc, setDoc, getDocs , collection, query , where} from "firebase/firestore";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  async function login (data) {
    setUser(data);
    (async ()=>{
      const doctorRef = doc(db, "doctors", `${data.phoneNumber}` );
      const patientRef = doc(db, "users", `${data.phoneNumber}` );
      const doctorSnap = await getDoc(doctorRef);
      console.log(doctorSnap.data());
      if (doctorSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        setUser(doctorSnap.data());
        // if(docSnap.data().type === "patient" && docSnap.data().assignD === ""){
        //   async () => {
        //       const q = query(
        //         collection(db, "users"),
        //         where("type", "==", "doctor")
        //       );
        //       const unsubscribe = onSnapshot(q, (querySnapshot) => {
        //         const cities = [];
        //         querySnapshot
        //         .forEach((doc) => {
        //           if(doc.data().assignP = ""){
        //             cities.push(doc.data());
        //           }
        //           // cities.push(doc.data());
        //         });
        //         console.log("Current cities in CA: ", cities);
        //         if(cities.length > 0){
        //           const docRef = doc(db, "users", `${data.phoneNumber}` );
        //     const docSnap = await getDoc(docRef);
        //     if (docSnap.exists()) {
        //       console.log("Document data:", docSnap.data());
        //       // const data = [{
        //       //   newRef:
        //       // }];
        //       // setDoc(docRef, data);
        //       // const data = {};
        //       docSnap = {...docSnap.data(), assignD: cities[0].phoneNumber};
        //       setDoc(docRef, docSnap , { merge: false });

        //     }
        //         }
        //       });
        //     }
        //   navigate("/dashboard");
        // }
        // else{
          navigate("/doctor");
        // }
      } else{
      const patientSnap = await getDoc(patientRef);
        if (patientSnap.exists()) {
          setUser(patientSnap.data());
          if(patientSnap.data().assignD===""){
            (async () => {
              // docSnap = {...patientRef.data(), assignD: };
              // setDoc(patientRef, docSnap , { merge: false });
            

              const doctors = []
            // (async()=>{
              const querySnapshot = await getDocs(query(collection(db, "doctors"), where("status", "==", true)));
              console.log(querySnapshot.docs);
             let doctor = await querySnapshot.forEach((doc) => {
              console.log(doc.id, " => ", doc.data());
              doctors.push(doc.data())
              return doc.data();
            }
            )
            console.log(doctor, doctors);
          // }
          // //   )()
          //   .then(async()=>{
            console.log("doctors===========>",doctors);

            const docRef = doc(db, "users", `${data.phoneNumber}` );
            // if(doctors.length > 0){
            //   let rand =Math.floor(Math.random() * doctors.length)
            // const d = {...patientSnap.data() ,assignD: doctors[d].phone}
            // await setDoc(docRef, d , { merge: true });
            // }
            // else{
              const d = {...patientSnap.data() ,assignD: doctors[0].phone}
              await setDoc(docRef, d , { merge: true });
            // }
          // })
          })().then(()=>{

            navigate("/dashboard");
          })
          }
        }
        else{
        navigate("/signup");
        // // doc.data() will be undefined in this case
        // console.log("No such document!");
        }
      }
    })();
  };

  // call this function to sign out logged in user
  function logout() {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  );
// const value = {
//     user,
//     login,
//     logout
//   }
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  return useContext(AuthContext);
};