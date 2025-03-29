import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import DefaultPage from "./pages/defaultpage/DefaultPage"
import Login from "./pages/loginpage/Login"
import HomeUser from "./pages/user/HomeUser"
import HomeAdmin from "./pages/admin/HomeAdmin"
import HomeUserProfile from "./pages/admin/homeadminright/homeUserProfile/HomeUserProfile"
import Deposit from "./pages/depositpage/Deposit"
import HomePayLoan from "./pages/user/homeright/homepayloan/HomePayLoan"
import OTP from "./pages/otppage/OTP"


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
      <Route path="/otp" element={<OTP/>}/>
     
      
    
     </Routes>
   
    </>
    
  )
}

export default App
