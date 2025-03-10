import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import DefaultPage from "./pages/defaultpage/DefaultPage"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <>
    {/* <Navbar/> */}
     <Routes>
      <Route path="/" element={<DefaultPage/>}/>
     </Routes>
     <hr />
     <Footer/>
    </>
    
  )
}

export default App
