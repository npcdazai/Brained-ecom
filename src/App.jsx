import { Box } from "@chakra-ui/react"
import Header from "./FunctionalComponents/Header/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Error from "./pages/Error"


const App = () => {
  return (
    <Box bgColor="#fff" >
      <BrowserRouter>
        <Header />
       
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App

  