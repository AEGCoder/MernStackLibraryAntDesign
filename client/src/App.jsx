import React from 'react'
import HomePage from "./pages/HomePage"
import HeaderComp from "./components/HeaderComp"
import AddBooks from "./pages/AddBooks"
import Books from "./pages/Books"
import {BrowserRouter,Routes,Route} from "react-router-dom"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <HeaderComp/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/addbooks" element={<AddBooks/>}/>
          <Route path="/books" element={<Books/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App