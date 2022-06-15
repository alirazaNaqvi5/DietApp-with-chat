import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage"
import {db} from "../firebase";
import { doc, getDoc  } from "firebase/firestore";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  async function login (data) {
    setUser(data);
    (async ()=>{
      const docRef = doc(db, "users", `${data.phoneNumber}` );
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUser(docSnap.data());
        if(docSnap.data().type === "patient" && docSnap.data().assignD === ""){
          async () => {
              const q = query(
                collection(db, "users"),
                where("type", "==", "doctor")
              );
              const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const cities = [];
                querySnapshot
                .forEach((doc) => {
                  if(doc.data().assignP = ""){
                    cities.push(doc.data());
                  }
                  // cities.push(doc.data());
                });
                console.log("Current cities in CA: ", cities);
                if(cities.length > 0){
                  const docRef = doc(db, "users", `${data.phoneNumber}` );
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              console.log("Document data:", docSnap.data());
              // const data = [{
              //   newRef:
              // }];
              // setDoc(docRef, data);
              // const data = {};
              docSnap = {...docSnap.data(), assignD: cities[0].phoneNumber};
              setDoc(docRef, docSnap , { merge: false });

            }
                }
              });
            }
          navigate("/dashboard");
        }
        else{
          navigate("/doctor");
        }
      } else {
        navigate("/signup");
        // doc.data() will be undefined in this case
        console.log("No such document!");
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