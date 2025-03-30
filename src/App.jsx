import { Route, Routes } from "react-router-dom"
import DefaultPage from "./pages/defaultpage/DefaultPage"
import Login from "./pages/loginpage/Login"
import HomeUser from "./pages/user/HomeUser"
import HomeAdmin from "./pages/admin/HomeAdmin"
import Deposit from "./pages/depositpage/Deposit"
import OTP from "./pages/otppage/OTP"
import { Toaster } from "react-hot-toast"



function App() {

  return (
    <>
    {/* <Navbar/> */}
    <Toaster/>
     <Routes>
      <Route path="/" element={<DefaultPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/userdashboard" element={<HomeUser/>}/>
      <Route path="/admindashboard" element={<HomeAdmin/>}/>
      <Route path="/deposit" element={<Deposit/>}/>
      <Route path="/otp" element={<OTP/>}/>
     
      
    
     </Routes>
   
    </>
    
  )
}

export default App
