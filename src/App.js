import "./App.css";
import Home from "./Pages/Home/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/Signup/index";
import Dashboard from "./Pages/dashboard/Index";
import Doctor from "./Pages/Doctor/Index";
import Login from "./Pages/login/index";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider} from "./hooks/useAuth";
import Admin from "./Pages/admin/index";
function App() {
  // const [user, setUser] = useState(null);

  return (
    // <user.Provider value={{ user, setUser }}>
      <BrowserRouter>
      <AuthProvider>
        <Routes>

          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<Admin />} />

          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
            
            } />
          <Route path="/Doctor" element={
            <ProtectedRoute>
              <Doctor />
            </ProtectedRoute>
            } />
        </Routes>
        </AuthProvider>

      </BrowserRouter>
    // </user.Provider>
  );
}

export default App;
