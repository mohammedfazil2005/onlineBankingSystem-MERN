import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import DefaultPage from "./pages/defaultpage/DefaultPage"
import Login from "./pages/loginpage/Login"
import HomeUser from "./pages/user/HomeUser"
import HomeAdmin from "./pages/admin/HomeAdmin"

function App() {

  return (
    <>
    {/* <Navbar/> */}
     <Routes>
      <Route path="/" element={<DefaultPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/userdashboard" element={<HomeUser/>}/>
      <Route path="/admindashboard" element={<HomeAdmin/>}/>
     </Routes>
   
    </>
    
  )
}

export default App
