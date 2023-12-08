import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";

import Register from "./pages/register/Register";
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import "./style.scss";
function App() {

  const currentUser=true;

  const Layout=()=>{
    return(
      <div className="theme-dark">

        <Navbar/>
        <div style={{display:"flex"}}>
          <Leftbar/>
          <div style={{flex:6}}>
            <Outlet/>
          </div>
          <Rightbar/>
        </div>
        
       </div>
    )
  }

  const ProtectedRoute=({children})=>{
    if(!currentUser)
    {
      return <Navigate to="/login"></Navigate>
    }
    return children;
  }



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProtectedRoute><Layout/></ProtectedRoute>  }>
          <Route path="/" element={<Home/>} />
          <Route path="/profile/:id" element={<Profile/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>

    </div>
  );
}

export default App;
