import { Box } from "@chakra-ui/react"
import Header from "./FunctionalComponents/Header/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Error from "./pages/Error"
import ContactUs from "./pages/ContactUs"
import Footer from "./FunctionalComponents/Footer"


const App = () => {
  return (
    <Box bgColor="#fff" >
      <BrowserRouter>
        <Header />
       
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<Error/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Box>
  )
}

export default App

  