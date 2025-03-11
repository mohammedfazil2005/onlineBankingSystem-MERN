import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import DefaultPage from "./pages/defaultpage/DefaultPage"
import Login from "./pages/loginpage/Login"

function App() {

  return (
    <>
    {/* <Navbar/> */}
     <Routes>
      <Route path="/" element={<DefaultPage/>}/>
      <Route path="/login" element={<Login/>}/>
     </Routes>
     <hr />
    </>
    
  )
}

export default App
