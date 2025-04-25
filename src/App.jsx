import { Navigate, Route, Routes } from "react-router-dom"
import DefaultPage from "./pages/defaultpage/DefaultPage"
import Login from "./pages/loginpage/Login"
import HomeUser from "./pages/user/HomeUser"
import HomeAdmin from "./pages/admin/HomeAdmin"
import OTP from "./pages/otppage/OTP"
import { Toaster } from "react-hot-toast"
import Staff from "./pages/staff/Staff"
import LoanOfficer from "./pages/loanOfficer/LoanOfficer"
import CreditCardManager from "./pages/creditcardManager/CreditCardManager"
import AccountManager from "./pages/accountManager/AccountManager"
import { useContext } from "react"
import { AuthContext } from "./contexts/TokenContext"



function App() {

  const {isToken,setIsToken,role,} = useContext(AuthContext)

  console.log(isToken)
  
  return (
    <>
    {/* <Navbar/> */}
    <Toaster/>
     <Routes>
      <Route path="/" element={<DefaultPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={isToken?role?role=="accountholder"?<HomeUser/>:role=="generalmanager"?<HomeAdmin/>:role=="loanofficer"?<LoanOfficer/>:role=="creditcardmanager"?<CreditCardManager/>:role=="accountmanager"?<AccountManager/>:role=="operationmanager"?<Staff/>:<Navigate to={'/login'}/>:<Navigate to={'/login'}/>:<Navigate to={'/login'}/>}/>

      <Route path="/admindashboard" element={<HomeAdmin/>}/>
      <Route path="/operationmanager" element={<Staff/>}/>
      <Route path="/loanofficerdashboard" element={<LoanOfficer/>}/>
      <Route path="/creditcardmanagerdashboard" element={<CreditCardManager/>}/>
      <Route path="/accountmanagerdashboard" element={<AccountManager/>}/>
      <Route path="/otp" element={<OTP/>}/>
      
     </Routes>
   
    </>
    
  )
}

export default App
