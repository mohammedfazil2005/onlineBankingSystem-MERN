import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import DefaultPage from "./pages/defaultpage/DefaultPage"
import Login from "./pages/loginpage/Login"
import HomeUser from "./pages/user/HomeUser"
import HomeAdmin from "./pages/admin/HomeAdmin"
import HomeUserProfile from "./pages/admin/homeadminright/homeUserProfile/HomeUserProfile"
import Deposit from "./pages/depositpage/Deposit"

function App() {

  return (
    <>
    {/* <Navbar/> */}
     <Routes>
      <Route path="/" element={<DefaultPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/userdashboard" element={<HomeUser/>}/>
      <Route path="/admindashboard" element={<HomeAdmin/>}/>
      <Route path="/deposit" element={<Deposit/>}/>
    
     </Routes>
   
    </>
    
  )
}

export default App
