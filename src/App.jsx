import { Routes, Route } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
function App() {  
  
  return (
   <div>
    <Header/>
    <Courses/>
    <Footer/>
    <Toaster />
   </div>    
  )
}

export default App


